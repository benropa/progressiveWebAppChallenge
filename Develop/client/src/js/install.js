const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
// complete!
// TODO: Implement a click event handler on the `butInstall` element
//complete!
// TODO: Add an handler for the `appinstalled` event
// completed!

window.addEventListener('beforeinstallprompt', (event) => {

	window.deferredPrompt = event;

	butInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async () => {
	const promptEvent = window.deferredPrompt;

	if (!promptEvent) {
		return;
    } 

	promptEvent.prompt();

	window.deferredPrompt = null;

	butInstall.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => {

	window.deferredPrompt = null;
});