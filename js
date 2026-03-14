// 1. Disable Right-Click (Context Menu)
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

// 2. Disable Keyboard Shortcuts (F12, Ctrl+Shift+I, Ctrl+U, etc.)
document.addEventListener('keydown', function (e) {
    // Block F12
    if (e.key === 'F12') {
        e.preventDefault();
    }
    // Block Ctrl+Shift+I (Windows/Linux) or Cmd+Option+I (Mac)
    if ((e.ctrlKey && e.shiftKey && e.key === 'I') || (e.metaKey && e.altKey && e.key === 'I')) {
        e.preventDefault();
    }
    // Block Ctrl+Shift+J (Console)
    if ((e.ctrlKey && e.shiftKey && e.key === 'J') || (e.metaKey && e.altKey && e.key === 'J')) {
        e.preventDefault();
    }
    // Block Ctrl+U / Cmd+U (View Source)
    if ((e.ctrlKey && e.key === 'U') || (e.metaKey && e.key === 'U')) {
        e.preventDefault();
    }
    // Block Ctrl+S / Cmd+S (Save Page)
    if ((e.ctrlKey && e.key === 'S') || (e.metaKey && e.key === 'S')) {
        e.preventDefault();
    }
});

// 3. The "Debugger" Trap (Freezes DevTools if they manage to open it)
setInterval(function() {
    debugger;
}, 100);
