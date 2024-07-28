// @deno-types="../dist/index.d.ts"
import * as api from '../dist/index.js';
import * as path from "https://deno.land/std@0.148.0/path/mod.ts";

const scriptFolder = path.dirname(path.fromFileUrl(import.meta.url)) + '\\';
console.log('script folder: ', scriptFolder);

const serverPath = scriptFolder + '..\\..\\..\\VirtualDesktopManager\\VirtualDesktopManager\\bin\\Release\\VirtualDesktopManager.exe';

console.log('\n\nChecking embedded javascript file...\n\n');

/** Test that a CSharp GUI application can write to its stdout (it can!) */
async function echoSubprocessTesting() {
    try {
        // create subprocess
        const p = Deno.run({
            cmd: [
                serverPath,
                "--write-javascript-client",
                // "--as-server"
            ],
            stderr: 'piped',
            stdout: 'piped',
            stdin: 'piped',
        });
        // await its completion
        p.status()
            .then(() => console.log("process exited"))
            .catch(error => console.error('failed to spawn desktop manager:', error));

        {
            const input = new TextEncoder().encode("\nEchoed data!");
            await p.stdin?.write(input);
            p.stdin.close();
        }

        /*
        (async () => {
            const buffer = new Uint8Array(1024);
            const read = await p.stdout.read(buffer);
            if (read == null) return;
            console.log("Stdout (streamed): " + new TextDecoder().decode(buffer));
        })();
        */
        const output = new TextDecoder().decode(await p.output());
        // console.log("Stdout (all): ", output);
        const expected = await Deno.readTextFile(scriptFolder + '../dist/index.js').catch(error => {
            console.error('Failed to open dist/index.js file:', error);
            throw new Error('Failed to open dist/index.js file');
        });
        if (output !== expected) {
            console.error("%cThe current virtual desktop manager doesn't embed the latest javascript client", 'color: red');
        } else {
            console.log('%cThe current virtual desktop manager embeds the latest javascript client', 'color: green');
        }
    } catch (error) {
        console.error(error);
    }
}
await echoSubprocessTesting();

console.log('\n\nTesting Server...\n\n');

async function testServer() {
    const client = api.Client.connectToSpawnedChildProcess({
        serverPath,
        handleServerCrash: (message) => console.error('server crash: ' + message),
        aggressivelyKillProcess: false,
    });
    try {
        client.onClientError.addListener(e => console.log('client err: ' + e + ' at location: ' + e.stack));
        client.onClosed.addListener(() => console.log('client closed at: ' + new Error().stack));
        {
            await client.changeCurrentVirtualDesktopToLeft(true, 1);
            console.log('Got response!');
        }
        {
            console.log();
            console.log();
            console.log('\\/\\/ Windows \\/\\/');
            console.log();
            const openWindows = client.queryOpenWindows({ hasVirtualDesktopInfo: true });
            try {
                for await (const info of openWindows) {
                    console.log('open window: ', info);
                }
            } catch (error) {
                console.error('Failed to get open windows: ', error);
            } finally {
                openWindows.close();
            }
            console.log();
            console.log();
            console.log('/\\ /\\ Windows /\\/\\');
            console.log();
            console.log();
        }
    } finally {
        client.close();
    }
    console.log('Done!');
}
await testServer();
