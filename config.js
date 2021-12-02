module.exports = {
    app: {
        px: '.',
        token: "OTE0Nzg0MTQyMDQ1MTE4NTE0.YaSFHw.ejrRBD30fv_GXE73YERNQmKriJw",
        playing: 'by DM Hub'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 400,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
