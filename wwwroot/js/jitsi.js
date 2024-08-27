const domain = 'meet.jit.si';
const options = {
    roomName: params.get('id'),
    width: '100%',
    height: '100%',
    parentNode: document.querySelector('#meet'),
    userInfo: {
        //email: user.email,
        displayName: user.display_name
    },
    configOverwrite: {
        disableDeepLinking: true,
    },
    interfaceConfigOverwrite: {
        TOOLBAR_BUTTONS: [
            'microphone', 'camera', 'closedcaptions', 'desktop', 'fullscreen',
            'fodeviceselection', 'hangup',
            'etherpad',
            'videoquality', 'filmstrip', 'feedback',
            'tileview', 'download', 'help', 'chat'
        ],
        SHOW_CHROME_EXTENSION_BANNER: false
    }
};
const api = new JitsiMeetExternalAPI(domain, options);
api.addEventListener('readyToClose', () => {
    api.dispose();
});