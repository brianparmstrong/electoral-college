(self.webpackChunkelectoral_college =
  self.webpackChunkelectoral_college || []).push([
  [792],
  {
    './node_modules/@storybook/core/dist/components sync recursive': (
      module
    ) => {
      function webpackEmptyContext(req) {
        var e = new Error("Cannot find module '" + req + "'");
        throw ((e.code = 'MODULE_NOT_FOUND'), e);
      }
      (webpackEmptyContext.keys = () => []),
        (webpackEmptyContext.resolve = webpackEmptyContext),
        (webpackEmptyContext.id =
          './node_modules/@storybook/core/dist/components sync recursive'),
        (module.exports = webpackEmptyContext);
    },
    './node_modules/@storybook/core/dist/theming sync recursive': (module) => {
      function webpackEmptyContext(req) {
        var e = new Error("Cannot find module '" + req + "'");
        throw ((e.code = 'MODULE_NOT_FOUND'), e);
      }
      (webpackEmptyContext.keys = () => []),
        (webpackEmptyContext.resolve = webpackEmptyContext),
        (webpackEmptyContext.id =
          './node_modules/@storybook/core/dist/theming sync recursive'),
        (module.exports = webpackEmptyContext);
    },
    './node_modules/@storybook/instrumenter/dist sync recursive': (module) => {
      function webpackEmptyContext(req) {
        var e = new Error("Cannot find module '" + req + "'");
        throw ((e.code = 'MODULE_NOT_FOUND'), e);
      }
      (webpackEmptyContext.keys = () => []),
        (webpackEmptyContext.resolve = webpackEmptyContext),
        (webpackEmptyContext.id =
          './node_modules/@storybook/instrumenter/dist sync recursive'),
        (module.exports = webpackEmptyContext);
    },
    './storybook-config-entry.js': (
      __unused_webpack_module,
      __unused_webpack___webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      var external_STORYBOOK_MODULE_GLOBAL_ =
          __webpack_require__('@storybook/global'),
        external_STORYBOOK_MODULE_PREVIEW_API_ = __webpack_require__(
          'storybook/internal/preview-api'
        ),
        external_STORYBOOK_MODULE_CHANNELS_ = __webpack_require__(
          'storybook/internal/channels'
        );
      const importers = [
        async (path) => {
          if (
            !/^\.[\\/](?:src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.mdx)$/.exec(
              path
            )
          )
            return;
          const pathRemainder = path.substring(6);
          return __webpack_require__(
            './src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$'
          )('./' + pathRemainder);
        },
        async (path) => {
          if (
            !/^\.[\\/](?:src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.(js|jsx|mjs|ts|tsx))$/.exec(
              path
            )
          )
            return;
          const pathRemainder = path.substring(6);
          return __webpack_require__(
            './src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$'
          )('./' + pathRemainder);
        },
      ];
      const channel = (0,
      external_STORYBOOK_MODULE_CHANNELS_.createBrowserChannel)({
        page: 'preview',
      });
      external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),
        'DEVELOPMENT' ===
          external_STORYBOOK_MODULE_GLOBAL_.global.CONFIG_TYPE &&
          (window.__STORYBOOK_SERVER_CHANNEL__ = channel);
      const preview = new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb(
        async function importFn(path) {
          for (let i = 0; i < importers.length; i++) {
            const moduleExports = await ((x = () => importers[i](path)), x());
            if (moduleExports) return moduleExports;
          }
          var x;
        },
        () =>
          (0, external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([
            __webpack_require__(
              './node_modules/@storybook/react-webpack5/node_modules/@storybook/react/dist/entry-preview.mjs'
            ),
            __webpack_require__(
              './node_modules/@storybook/react-webpack5/node_modules/@storybook/react/dist/entry-preview-docs.mjs'
            ),
            __webpack_require__(
              './node_modules/@storybook/addon-links/dist/preview.mjs'
            ),
            __webpack_require__(
              './node_modules/@storybook/addon-essentials/dist/docs/preview.mjs'
            ),
            __webpack_require__(
              './node_modules/@storybook/addon-essentials/dist/actions/preview.mjs'
            ),
            __webpack_require__(
              './node_modules/@storybook/addon-essentials/dist/backgrounds/preview.mjs'
            ),
            __webpack_require__(
              './node_modules/@storybook/addon-essentials/dist/viewport/preview.mjs'
            ),
            __webpack_require__(
              './node_modules/@storybook/addon-essentials/dist/measure/preview.mjs'
            ),
            __webpack_require__(
              './node_modules/@storybook/addon-essentials/dist/outline/preview.mjs'
            ),
            __webpack_require__(
              './node_modules/@storybook/addon-essentials/dist/highlight/preview.mjs'
            ),
            __webpack_require__(
              './node_modules/@storybook/addon-interactions/dist/preview.mjs'
            ),
            __webpack_require__('./.storybook/preview.ts'),
          ])
      );
      (window.__STORYBOOK_PREVIEW__ = preview),
        (window.__STORYBOOK_STORY_STORE__ = preview.storyStore),
        (window.__STORYBOOK_ADDONS_CHANNEL__ = channel);
    },
    './node_modules/memoizerific sync recursive': (module) => {
      function webpackEmptyContext(req) {
        var e = new Error("Cannot find module '" + req + "'");
        throw ((e.code = 'MODULE_NOT_FOUND'), e);
      }
      (webpackEmptyContext.keys = () => []),
        (webpackEmptyContext.resolve = webpackEmptyContext),
        (webpackEmptyContext.id = './node_modules/memoizerific sync recursive'),
        (module.exports = webpackEmptyContext);
    },
    './.storybook/preview.ts': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          default: () => _storybook_preview,
        });
      __webpack_require__('./node_modules/react/index.js');
      var jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        lib = __webpack_require__('./node_modules/@mdx-js/react/lib/index.js'),
        dist = __webpack_require__(
          './node_modules/@storybook/blocks/dist/index.mjs'
        );
      function _createMdxContent(props) {
        const _components = {
          code: 'code',
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          p: 'p',
          pre: 'pre',
          ...(0, lib.R)(),
          ...props.components,
        };
        return (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [
            (0, jsx_runtime.jsx)(dist.W8, { isTemplate: !0 }),
            '\n',
            (0, jsx_runtime.jsx)(_components.h1, {
              id: 'how-to-use-this-module',
              children: 'How To Use This Module',
            }),
            '\n',
            (0, jsx_runtime.jsx)(_components.p, {
              children:
                'As of 3.x this module is now a true npm module that can be imported into and used in any application.\nThis module expects that there will be one and only one candidate each for:',
            }),
            '\n',
            (0, jsx_runtime.jsx)(_components.p, {
              children:
                'Republican\nDemocratic\nLibertarian\nGreen\nIndependent',
            }),
            '\n',
            (0, jsx_runtime.jsx)(_components.p, {
              children:
                'You are free to pick whatever candidate you want as the Independent candidate, but you must pick only one.\nE.g. for 2024 there are many polling companies conducting 5-way polls that include two Independents -- Robert F. Kennedy, Jr. and Cornell West.\nThese polls do not include the Libertarian Party candidate Chase Oliver but do include the Green Party candidate Jill Stein.\nRobert F. Kennedy, Jr. is polling much higher than Cornell West but you can choose to include West as the Independent candidate, if you want, instead of Kennedy, Jr.\nEven though Kennedy, Jr. has endorsed Trump I am keeping him here because he is still on the ballot in many states and would likely receive more votes than West.',
            }),
            '\n',
            (0, jsx_runtime.jsx)(_components.pre, {
              children: (0, jsx_runtime.jsx)(_components.code, {
                children:
                  "import ElectoralCollege from 'electoral-college/dist';\n",
              }),
            }),
            '\n',
            (0, jsx_runtime.jsx)(_components.h1, {
              id: 'props',
              children: 'Props',
            }),
            '\n',
            (0, jsx_runtime.jsxs)(_components.p, {
              children: [
                (0, jsx_runtime.jsx)(_components.code, {
                  children: 'candidateImageSources',
                }),
                ' - object - optional - pass if you want to display candidate images; keys are the political party, values are strings of the ',
                (0, jsx_runtime.jsx)(_components.code, { children: '<img />' }),
                ' ',
                (0, jsx_runtime.jsx)(_components.code, { children: 'src' }),
                ' attribute:',
              ],
            }),
            '\n',
            (0, jsx_runtime.jsx)(_components.pre, {
              children: (0, jsx_runtime.jsx)(_components.code, {
                className: 'language-js',
                children:
                  '{\n  dem: string;\n  gop: string;\n  grn: string;\n  ind: string;\n  lib: string;\n}\n',
              }),
            }),
            '\n',
            (0, jsx_runtime.jsxs)(_components.p, {
              children: [
                (0, jsx_runtime.jsx)(_components.code, {
                  children: 'candidatesData',
                }),
                ' - array of objects - required - must be in following format:',
              ],
            }),
            '\n',
            (0, jsx_runtime.jsx)(_components.pre, {
              children: (0, jsx_runtime.jsx)(_components.code, {
                className: 'language-js',
                children:
                  '[\n  {\n    name: string; // e.g. "Harris"\n    party: string; // e.g. "dem" -- notice it is lowercased\n  },\n]\n// must include one object for each of the five parties: dem, gop, grn, ind, lib\n',
              }),
            }),
            '\n',
            (0, jsx_runtime.jsxs)(_components.p, {
              children: [
                (0, jsx_runtime.jsx)(_components.code, {
                  children: 'enableStickyEVCounter',
                }),
                ' - boolean - optional (defaults to Boolean(true)) - causes EV Counter at top of screen to act as a sticky header',
              ],
            }),
            '\n',
            (0, jsx_runtime.jsxs)(_components.p, {
              children: [
                (0, jsx_runtime.jsx)(_components.code, { children: 'mapSize' }),
                " - 'small' | 'medium' | 'large' - optional (defaults to 'large') - causes SVG map to render at a different size ('small' = 50% height & width; 'medium' = 75% height & width, 'large' = 100% height & width)",
              ],
            }),
            '\n',
            (0, jsx_runtime.jsxs)(_components.p, {
              children: [
                (0, jsx_runtime.jsx)(_components.code, {
                  children: 'stateControlSize',
                }),
                " - 'small' | 'medium' | 'large' - optional (defaults to 'large') - causes the ",
                (0, jsx_runtime.jsx)(_components.code, {
                  children: '.state-control',
                }),
                ' elements to render at different sizes, allowing more ',
                (0, jsx_runtime.jsx)(_components.code, {
                  children: '.state-control',
                }),
                " elements to render in each row ('medium' only changes width of ",
                (0, jsx_runtime.jsx)(_components.code, {
                  children: '.pvInput',
                }),
                "; 'small' also changes widths of buttons and font-size of state names)",
              ],
            }),
            '\n',
            (0, jsx_runtime.jsx)(_components.h1, {
              id: 'styles',
              children: 'Styles',
            }),
            '\n',
            (0, jsx_runtime.jsxs)(_components.p, {
              children: [
                'To get the ',
                (0, jsx_runtime.jsx)(_components.code, {
                  children: 'import "../../src/style.scss" to work in ',
                }),
                '/src/components/ElectoralCollege" I had to use ',
                (0, jsx_runtime.jsx)(_components.code, {
                  children: 'rollup-plugin-styles',
                }),
                '.\nBut this had dependency conflicts with Storybook. So I removed the rollup dep and commented out the above ',
                (0, jsx_runtime.jsx)(_components.code, { children: 'import' }),
                ' statement.\nThen I installed and configured Storybook. After verifying I could load the styles via Storybook configuration I then re-installed the rollup plugin,\nre-enabled the ',
                (0, jsx_runtime.jsx)(_components.code, { children: 'import' }),
                ' statement, re-built the package via rollup. The styles were now part of the built module!\nSo I removed the styles from Storybook.',
              ],
            }),
            '\n',
            (0, jsx_runtime.jsx)(_components.p, {
              children:
                "If needed you can copy all the styles from `electoral-college/src/style.scss' into your application.",
            }),
            '\n',
            (0, jsx_runtime.jsx)(_components.h1, {
              id: 'types',
              children: 'Types',
            }),
            '\n',
            (0, jsx_runtime.jsxs)(_components.p, {
              children: [
                "These should now be automatically picked up so you shouldn't need to modify your ",
                (0, jsx_runtime.jsx)(_components.code, {
                  children: 'tsconfig.json',
                }),
                ' nor declare a module.',
              ],
            }),
            '\n',
            (0, jsx_runtime.jsx)(_components.h2, {
              id: 'winner-take-all--current-system',
              children: 'Winner-Take-All / Current System',
            }),
            '\n',
            (0, jsx_runtime.jsx)(_components.h3, {
              id: 'using-the-map',
              children: 'Using the Map',
            }),
            '\n',
            (0, jsx_runtime.jsxs)(_components.p, {
              children: [
                "Click on each state to toggle the winner. You'll see the state change colors to match the political party, as well as the Winner-Take-All total change. The ",
                (0, jsx_runtime.jsx)(_components.code, {
                  children: 'Electoral Votes Counter',
                }),
                ' will update accordingly.',
              ],
            }),
            '\n',
            (0, jsx_runtime.jsx)(_components.p, {
              children: 'Maine and Nebraska award their EVs as follows:',
            }),
            '\n',
            (0, jsx_runtime.jsx)(_components.p, {
              children:
                '2 EVs to the candidate receiving the most votes statewide\n1 EV to the candidate receiving the most votes in each CD',
            }),
            '\n',
            (0, jsx_runtime.jsx)(_components.p, {
              children:
                'Clicking on either of these states on the map will award only the 2 EVs described above. You will have to manually select the winner of each CD in the list of states below the map.',
            }),
            '\n',
            (0, jsx_runtime.jsx)(_components.p, {
              children:
                'When clicking on a state you should see the corresponding state update accordingly in the list of states below the map.',
            }),
            '\n',
            (0, jsx_runtime.jsx)(_components.h3, {
              id: 'using-the-list-of-states',
              children: 'Using the list of states',
            }),
            '\n',
            (0, jsx_runtime.jsx)(_components.p, {
              children:
                "Click on the box with the number of EVs above each state name to toggle the winner. This works the same for Maine and Nebraska's CDs.",
            }),
            '\n',
            (0, jsx_runtime.jsx)(_components.p, {
              children:
                "When clicking on a state's EV box you should see the corresponding state update accordingly in the map above the list.",
            }),
            '\n',
            (0, jsx_runtime.jsx)(_components.h2, {
              id: 'proportional-representation',
              children: 'Proportional Representation',
            }),
            '\n',
            (0, jsx_runtime.jsx)(_components.p, {
              children:
                "Enter the percentage of votes won by each candidate. This will calculate how many EVs the candidate would win if EVs were awarded proportionally.\nIn some cases the total EVs awarded will not quite add up to 100% of that State's EVs, due to rounding. In this case you'll have to fudge the numbers until 100% of EVs for that state have been awarded.\nWhat I do, and what I would recommend for a Proportional system (which, of course, would have to be spelled out in the law), is:",
            }),
            '\n',
            (0, jsx_runtime.jsx)(_components.p, {
              children:
                'Only 1 EV unawarded? Give it to the candidate with the most votes in that State.\nOnly 2 EVs unawarded? Give 1 EV each to the top two vote getters?\nOnly 3 EVs unawarded? Give 2 EVs to the candidate with the most votes, 1 EV to the candidate with the second most votes. Or, if there are three candidates with a similar % of votes in the state then give 1 EV to each of them.\nMore than 3 EVs unawarded? Give at least 2 EVs to the candidate with the most votes then split the remaining according to your preference.',
            }),
            '\n',
            (0, jsx_runtime.jsx)(_components.p, {
              children:
                "You're free to fudge the numbers however you wish. Maybe you want to give a candidate 1 EV who has received at least 5% or 10% of the PV in that State && who has not already received at least 1 EV. Maybe you want to give them all to the winner. It's up to you! The point is to see how a different electoral system could result in different outcomes.",
            }),
            '\n',
            (0, jsx_runtime.jsxs)(_components.p, {
              children: [
                'However you do it, the ',
                (0, jsx_runtime.jsx)(_components.code, {
                  children: 'Proportional',
                }),
                ' total changes, as well as the ',
                (0, jsx_runtime.jsx)(_components.code, {
                  children: 'Popular Votes Counter',
                }),
                '.',
              ],
            }),
            '\n',
            (0, jsx_runtime.jsx)(_components.p, {
              children:
                'For both counters there is a black arrow pointing at the line a winner must cross.',
            }),
            '\n',
            (0, jsx_runtime.jsx)(_components.h2, {
              id: 'saving-results',
              children: 'Saving Results',
            }),
            '\n',
            (0, jsx_runtime.jsxs)(_components.p, {
              children: [
                'Click the ',
                (0, jsx_runtime.jsx)(_components.code, { children: 'Save' }),
                ' button. This will save the results to localStorage. The next time you try to load the application it will use this data instead of loading blank.',
              ],
            }),
            '\n',
            (0, jsx_runtime.jsx)(_components.h2, {
              id: 'clearing-results',
              children: 'Clearing Results',
            }),
            '\n',
            (0, jsx_runtime.jsxs)(_components.p, {
              children: [
                'Click the ',
                (0, jsx_runtime.jsx)(_components.code, { children: 'Clear' }),
                ' button (shows only if data has previously been saved). This will clear the current results as well as your localStorage data.',
              ],
            }),
            '\n',
            (0, jsx_runtime.jsx)(_components.h1, {
              id: 'screenshots',
              children: 'Screenshots',
            }),
            '\n',
            (0, jsx_runtime.jsxs)(_components.p, {
              children: [
                (0, jsx_runtime.jsx)(_components.code, {
                  children: '/docs/screenshots/2016_FINAL_RESULTS',
                }),
                ' -- Winner-take-all and proportional representation EV results for Trump and Clinton',
              ],
            }),
            '\n',
            (0, jsx_runtime.jsx)(_components.h1, {
              id: 'historical-data',
              children: 'Historical data',
            }),
            '\n',
            (0, jsx_runtime.jsxs)(_components.p, {
              children: [
                (0, jsx_runtime.jsx)(_components.code, {
                  children: 'docs/historical-data/apportionment',
                }),
                ' contains Electoral College representation for each state based on the 2010 census. This data was used for the 2012, 2016, and 2020 elections.\n',
                (0, jsx_runtime.jsx)(_components.code, {
                  children: 'docs/historical-data/candidates',
                }),
                ' contains the candidates from the 2016 and 2020 elections.',
              ],
            }),
          ],
        });
      }
      const _storybook_preview = {
        parameters: {
          controls: {
            matchers: { color: /(background|color)$/i, date: /Date$/i },
          },
          docs: {
            page: function MDXContent(props = {}) {
              const { wrapper: MDXLayout } = {
                ...(0, lib.R)(),
                ...props.components,
              };
              return MDXLayout
                ? (0, jsx_runtime.jsx)(MDXLayout, {
                    ...props,
                    children: (0, jsx_runtime.jsx)(_createMdxContent, {
                      ...props,
                    }),
                  })
                : _createMdxContent(props);
            },
          },
        },
        tags: ['autodocs'],
      };
    },
    './src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var map = {
          './stories/Configure.mdx': ['./src/stories/Configure.mdx', 187],
        };
        function webpackAsyncContext(req) {
          if (!__webpack_require__.o(map, req))
            return Promise.resolve().then(() => {
              var e = new Error("Cannot find module '" + req + "'");
              throw ((e.code = 'MODULE_NOT_FOUND'), e);
            });
          var ids = map[req],
            id = ids[0];
          return __webpack_require__
            .e(ids[1])
            .then(() => __webpack_require__(id));
        }
        (webpackAsyncContext.keys = () => Object.keys(map)),
          (webpackAsyncContext.id =
            './src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$'),
          (module.exports = webpackAsyncContext);
      },
    './src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var map = {
          './components/ElectoralCollege/ElectoralCollege.stories': [
            './src/components/ElectoralCollege/ElectoralCollege.stories.tsx',
            81,
          ],
          './components/ElectoralCollege/ElectoralCollege.stories.tsx': [
            './src/components/ElectoralCollege/ElectoralCollege.stories.tsx',
            81,
          ],
          './stories/Button.stories': [
            './src/stories/Button.stories.ts',
            197,
            791,
          ],
          './stories/Button.stories.ts': [
            './src/stories/Button.stories.ts',
            197,
            791,
          ],
          './stories/Header.stories': [
            './src/stories/Header.stories.ts',
            197,
            512,
          ],
          './stories/Header.stories.ts': [
            './src/stories/Header.stories.ts',
            197,
            512,
          ],
          './stories/Page.stories': ['./src/stories/Page.stories.ts', 197, 290],
          './stories/Page.stories.ts': [
            './src/stories/Page.stories.ts',
            197,
            290,
          ],
        };
        function webpackAsyncContext(req) {
          if (!__webpack_require__.o(map, req))
            return Promise.resolve().then(() => {
              var e = new Error("Cannot find module '" + req + "'");
              throw ((e.code = 'MODULE_NOT_FOUND'), e);
            });
          var ids = map[req],
            id = ids[0];
          return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() =>
            __webpack_require__(id)
          );
        }
        (webpackAsyncContext.keys = () => Object.keys(map)),
          (webpackAsyncContext.id =
            './src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$'),
          (module.exports = webpackAsyncContext);
      },
    'storybook/internal/channels': (module) => {
      'use strict';
      module.exports = __STORYBOOK_MODULE_CHANNELS__;
    },
    'storybook/internal/client-logger': (module) => {
      'use strict';
      module.exports = __STORYBOOK_MODULE_CLIENT_LOGGER__;
    },
    'storybook/internal/preview-errors': (module) => {
      'use strict';
      module.exports = __STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__;
    },
    'storybook/internal/core-events': (module) => {
      'use strict';
      module.exports = __STORYBOOK_MODULE_CORE_EVENTS__;
    },
    '@storybook/global': (module) => {
      'use strict';
      module.exports = __STORYBOOK_MODULE_GLOBAL__;
    },
    'storybook/internal/preview-api': (module) => {
      'use strict';
      module.exports = __STORYBOOK_MODULE_PREVIEW_API__;
    },
  },
  (__webpack_require__) => {
    __webpack_require__.O(0, [193], () => {
      return (
        (moduleId = './storybook-config-entry.js'),
        __webpack_require__((__webpack_require__.s = moduleId))
      );
      var moduleId;
    });
    __webpack_require__.O();
  },
]);
