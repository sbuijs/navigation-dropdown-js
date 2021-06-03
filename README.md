# basic-setup-css-html-project

scss/                               # Import all ‘-dir.scss’ files
|
|- abstracts/                   
|	|- _fonts.scss              # Font Import
|	|- _mixins.scss             # Scss Mixins
|	|- _variables.scss          # Scss Variables
|
|- base/
|	|- _reset.scss              # Custom Reset/Normalize
|	|- _typography.scss         # Typography Rules
|	|- color.scss               # Color Rules
|	…                           # Etc.
|
|- components/
|	|- _button.scss             # Button Styles
|	|- _input.scss              # Input Styles
|	|- _modal.scss              # Modal Styles
|	…	                    # Etc.
|
|- layouts/
|	|- _footer.scss             # Footer Styles
|	|- _main-navigation.scss    # Main Navigation Styles
|	…                           # Etc.
|
|- vendor/
|	|- bourbon/                 # Bourbon
|	|- fontawesome/             # Font Awesome
|	|- neat/                    # Bourbon Neat
|	|- normalize/               # Normalize
|	…                           # Etc.
|
`styles.scss                        # Main Scss File