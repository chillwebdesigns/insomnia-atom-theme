module.exports.themes = [{
    name: 'atom-theme',     // theme name in kebab-case
    displayName: 'Atom',    // formatted theme name
    theme: {
        rawCss: `
        .urlbar .urlbar__send-btn,
        .urlbar .urlbar__send-context,
        .urlbar .urlbar__send-context:focus:not(:disabled),
        .urlbar .urlbar__send-context:hover{
            background:#c678dd !important;
        }
        .http-method-GET{
            color:#c678dd !important;
        }
        .http-method-POST{
            color:#98C379 !important;
        }
        .http-method-PUT{
            color:#D19A66 !important;
        }
        .http-method-PATCH{
            color:#E5C07B !important;
        }
        bg-http-method-DELETE{
            color:#F44747 !important;
        }
        .http-method-OPTIONS{
            color:#61AFAF !important;
        }
        .http-method-HEAD{
            color:#56b6c2 !important;
        }
        .sidebar .sidebar__item.sidebar__item--active.sidebar__item--request>button{
            border-color:#ccc;
        }
        .bg-success{
            background:#98c379 !important;
        }
        .bg-danger{
            background:#F44747 !important;
        }
        .bYUQvI{
            background:#61afef !important;
        }
        `,
        // Background, foreground, and highlight values nested directly in the theme 
        // object will serve as the default overwrites for all properties you add.
        background: {
            default: '#282C34',  // primary background color
            success: '#E06C75',  // POST request, 200 OK, parameter names
            notice: '#98C379',  // PATCH request
            warning: '#A691AE',  // PUT request
            danger: '#FF4242',  // DELETE request
            surprise: '#E5C07B',  // accent (Dashboard link, GET request, 
            // SEND button, branch button, add plugin button)
            info: '#58A6FF'   // OPTIONS AND HEAD request
        },
        foreground: {
            default: '#fff',     // primary font color
            success: '#fff',     // secondary font color for success background
            notice: '#000',     // secondary font color for notice background
            warning: '#fff',     // secondary font color for warning background
            danger: '#fff',     // secondary font color for danger background
            surprise: '#fff',     // secondary font color for surprise background
            info: '#000'      // secondary font color for info background
        },
        highlight: {
            default: '#D3D3D3'   // sidebar highlight color
        },
        // The styles object targets sub-components of the Insomnia application.
        styles: {
            appHeader: {
                foreground: {
                    surprise: '#000'    // header branch button font color
                }
            },
            sidebar: {
                background: {
                    default: '#21252B',
                },
                foreground: {
                    default: '#D3D3D3',
                },
                highlight: {
                    default: '#D3D3D3',
                },
            },
            paneHeader: {
                foreground: {
                    surprise: '#fff',     // pane accent font color
                    info: '#000'      // pane response font color
                }
            },
            editor: {
                foreground: {
                    default: '#000',     // primary editor font color
                    surprise: '#fff',     // editor accent font color
                    info: '#000'      // editor response font color
                }
            },
            dialog: {
                background: {
                    default: '#21252B'      // modal primary background color
                },
                foreground: {
                    default: '#fff'         // modal primary font color
                }
            }
        }
    }
}]