// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

import openAlexaConsole from "./alexaConsole";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(vscode.commands.registerCommand('voicetools.aplEditor', () => {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://developer.amazon.com/alexa/console/ask/displays'));
	}));


	context.subscriptions.push(vscode.commands.registerCommand('voicetools.aplReference', () => {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('https://developer.amazon.com/docs/alexa-presentation-language/apl-overview.html'));
	}));

	context.subscriptions.push(openAlexaConsole());
}

// this method is called when your extension is deactivated
export function deactivate() { }
