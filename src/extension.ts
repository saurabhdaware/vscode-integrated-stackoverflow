// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import {getHtmlContent} from './webview';
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
		console.log('Congratulations, your extension "integrated-stackoverflow" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let stackOverdlowView = vscode.commands.registerCommand('extension.soView',() => {
		// Gotta play with this API :)
		// https://api.stackexchange.com/2.2/search/advanced?order=desc&sort=relevance&q=get+date+in+javascript&answers=1&site=stackoverflow
		    // Create and show panel
		const panel = vscode.window.createWebviewPanel(
			'stackOverflow',
			'StackOverflow View',
			vscode.ViewColumn.One,
			{
				enableScripts: true
			}
		);
	
		// And set its HTML content
		panel.webview.html = getHtmlContent();
	})
	context.subscriptions.push(stackOverdlowView);
	
	let disposable = vscode.commands.registerCommand('extension.helloWorld', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World!');
	});
	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
