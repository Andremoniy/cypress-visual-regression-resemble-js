# Cypress Visual Regression with Ressemble.JS

[![npm](https://img.shields.io/npm/v/cypress-visual-regression)](https://www.npmjs.com/package/cypress-visual-regression-ressemble-js)

[![github actions](https://github.com/Andremoniy/cypress-visual-regression-ressemble-js/workflows/Continuous%20Integration/badge.svg)](https://github.com/Andremoniy/cypress-visual-regression-ressemble-js/actions)


Module for adding visual regression testing to [Cypress](https://www.cypress.io/),. based on [Cypress Visual Regression](https://github.com/cypress-visual-regression/cypress-visual-regression) plugin and [Ressemble.JS](https://github.com/rsmbl/Resemble.js) library.

## Comparison with existing [Visual Testing plugins](https://docs.cypress.io/plugins/directory#Visual%20Testing)

| Library  | Difference | Detect anti-aliasing effect | Lightweight | In-test configuration | Free | Remark |
| ------------- | ------------- | ------------- | ------------- | ------------- |------------- |------------- |
| Argos  | ? | ? | :x: | :x: |  :white_check_mark: (limited) | Requires API access to the Argos's server |
| Applitools  | ? | ? | :x: | :x: |  :white_check_mark: (limited) | Requires API access to the Applitools's server |
| Percy  | ? | ? | :x: | :x: |  :white_check_mark: (limited) | Requires API access to the Percy's server |
| happo  | ? | ? | :x: |  :x: |  :x:  | Requires API access to the happo's server |
| cypress-plugin-snapshots  | ? | ? | :white_check_mark:  | :white_check_mark:|  :white_check_mark:|Not possible to install (bound to an outdated version of cypress) |
| cypress-image-snapshot  | ? | ? | :white_check_mark:  | :white_check_mark:|  :white_check_mark:|Not possible to install (bound to an outdated version of cypress) |
| cypress-visual-regression  | 29.63%  | :x: | :white_check_mark:  | :white_check_mark:| :white_check_mark:| |
| **cypress-visual-regression-ressemble-js**  | **6.2%**  | :white_check_mark: | :white_check_mark:  | :white_check_mark:| :white_check_mark:| |
| cypress-blink-test  | ? | ? | :white_check_mark:  | :white_check_mark:|  :white_check_mark:|Not possible to install (bound to an outdated version of cypress) |
| Visual Regression Tracker | ? | ? | :x:  | :white_check_mark:|  :white_check_mark:|The client library is not working, requires Docker |
| cypress-image-diff | 30.1% | :x: | :white_check_mark:  | :white_check_mark:| :white_check_mark:| |
| micoocypress | 8.8518% | :white_check_mark: | :x: | :x: | :white_check_mark:| Requires Docker |
| cypress-visual-regression-diff | 14.7% |:white_check_mark: | ✅| ✅| :white_check_mark:| Requires manual installation of the sharp library on linux |
