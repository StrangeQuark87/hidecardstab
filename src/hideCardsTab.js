
Hooks.on("renderSidebarTab", async (app, html) => {
    html.find('#sidebar-tabs a[data-tab=cards]').attr('style', 'display: none')
});

console.log("Hide Cards | --- Module loaded");