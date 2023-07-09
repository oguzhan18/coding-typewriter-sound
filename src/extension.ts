import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('daktilo-sesli-kod-yazma.enableTypingSound', () => {
        vscode.workspace.getConfiguration().update('editor.playground.typingSound', 'daktilo_sesi.mp3', true);
    });

    context.subscriptions.push(disposable);

    disposable = vscode.commands.registerCommand('daktilo-sesli-kod-yazma.disableTypingSound', () => {
        vscode.workspace.getConfiguration().update('editor.playground.typingSound', '', true);
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
