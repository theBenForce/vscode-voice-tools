import * as vscode from 'vscode';

export default function openAlexaConsole(): vscode.Disposable {
    const result = vscode.commands.registerCommand('voicetools.alexaConsole', execute);
    return result;
}

function execute() {
    vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://developer.amazon.com/alexa/console/ask'));
}