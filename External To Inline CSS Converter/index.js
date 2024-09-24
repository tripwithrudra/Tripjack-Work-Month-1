import { readFileSync, writeFileSync } from 'fs';
import { parse } from 'css';
import { JSDOM } from 'jsdom';

// File paths
const cssFilePath = 'styles.css';
const htmlFilePath = 'index.html';
const outputHtmlPath = 'output.html';

// Read CSS and HTML content
const cssContent = readFileSync(cssFilePath, 'utf8');
const htmlContent = readFileSync(htmlFilePath, 'utf8');

// Parse the CSS content
const parsedCSS = parse(cssContent);

// Load the HTML using JSDOM
const dom = new JSDOM(htmlContent);
const document = dom.window.document;

// Function to apply CSS rules to HTML elements
function applyCSSRules() {
  parsedCSS.stylesheet.rules.forEach(rule => {
    if (rule.type === 'rule') {
      const selectors = rule.selectors;
      selectors.forEach(selector => {
        // Select all matching elements in the HTML
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
          // Get current inline styles (if any)
          let inlineStyle = element.getAttribute('style') || '';
          rule.declarations.forEach(declaration => {
            // Append each CSS declaration to the inline style
            inlineStyle += `${declaration.property}: ${declaration.value}; `;
          });
          // Set the inline style on the element
          element.setAttribute('style', inlineStyle.trim());
        });
      });
    }
  });
}

// Apply the CSS rules to the HTML
applyCSSRules();

// Output the modified HTML
const outputHtml = dom.serialize();
writeFileSync(outputHtmlPath, outputHtml, 'utf8');
console.log('HTML with inline styles saved to', outputHtmlPath);