function cov_fyeyodklf() {
  var path = "C:\\Users\\Majd-\\Desktop\\StarwarsPlanets\\src\\main.ts";
  var hash = "919fa79e365931c575b9de44846f9d2b7fd0e4fa";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Majd-\\Desktop\\StarwarsPlanets\\src\\main.ts",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 0
        },
        end: {
          line: 9,
          column: 1
        }
      },
      "1": {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 8,
          column: 19
        }
      },
      "2": {
        start: {
          line: 11,
          column: 0
        },
        end: {
          line: 12,
          column: 36
        }
      },
      "3": {
        start: {
          line: 12,
          column: 16
        },
        end: {
          line: 12,
          column: 34
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 12,
            column: 9
          },
          end: {
            line: 12,
            column: 10
          }
        },
        loc: {
          start: {
            line: 12,
            column: 16
          },
          end: {
            line: 12,
            column: 34
          }
        },
        line: 12
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 7,
            column: 0
          },
          end: {
            line: 9,
            column: 1
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 7,
            column: 0
          },
          end: {
            line: 9,
            column: 1
          }
        }, {
          start: {
            line: 7,
            column: 0
          },
          end: {
            line: 9,
            column: 1
          }
        }],
        line: 7
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "919fa79e365931c575b9de44846f9d2b7fd0e4fa"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_fyeyodklf = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_fyeyodklf();
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
cov_fyeyodklf().s[0]++;

if (environment.production) {
  cov_fyeyodklf().b[0][0]++;
  cov_fyeyodklf().s[1]++;
  enableProdMode();
} else {
  cov_fyeyodklf().b[0][1]++;
}

cov_fyeyodklf().s[2]++;
platformBrowserDynamic().bootstrapModule(AppModule).catch(err => {
  cov_fyeyodklf().f[0]++;
  cov_fyeyodklf().s[3]++;
  return console.error(err);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOlsiZW5hYmxlUHJvZE1vZGUiLCJwbGF0Zm9ybUJyb3dzZXJEeW5hbWljIiwiQXBwTW9kdWxlIiwiZW52aXJvbm1lbnQiLCJwcm9kdWN0aW9uIiwiYm9vdHN0cmFwTW9kdWxlIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosU0FBU0EsY0FBVCxRQUErQixlQUEvQjtBQUNBLFNBQVNDLHNCQUFULFFBQXVDLG1DQUF2QztBQUVBLFNBQVNDLFNBQVQsUUFBMEIsa0JBQTFCO0FBQ0EsU0FBU0MsV0FBVCxRQUE0Qiw0QkFBNUI7OztBQUVBLElBQUlBLFdBQVcsQ0FBQ0MsVUFBaEIsRUFBNEI7QUFBQTtBQUFBO0FBQzFCSixFQUFBQSxjQUFjO0FBQ2YsQ0FGRDtBQUFBO0FBQUE7OztBQUlBQyxzQkFBc0IsR0FBR0ksZUFBekIsQ0FBeUNILFNBQXpDLEVBQ0dJLEtBREgsQ0FDU0MsR0FBRyxJQUFJO0FBQUE7QUFBQTtBQUFBLFNBQUFDLE9BQU8sQ0FBQ0MsS0FBUixDQUFjRixHQUFkO0FBQWtCLENBRGxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgcGxhdGZvcm1Ccm93c2VyRHluYW1pYyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XHJcblxyXG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC9hcHAubW9kdWxlJztcclxuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICcuL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCc7XHJcblxyXG5pZiAoZW52aXJvbm1lbnQucHJvZHVjdGlvbikge1xyXG4gIGVuYWJsZVByb2RNb2RlKCk7XHJcbn1cclxuXHJcbnBsYXRmb3JtQnJvd3NlckR5bmFtaWMoKS5ib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlKVxyXG4gIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcclxuIl19