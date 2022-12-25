# cypress-visual-regression-ressemble-js

| Library  | Difference | Detect anti-aliasing effect | Lightweight | In-test configuration | Free | Remark |
| ------------- | ------------- | ------------- | ------------- | ------------- |------------- |------------- |
| Argos  | ? | ? | :x: |  :white_check_mark: |  Free plan allows you :
 Up to 5,000 screenshots / month
 Unlimited users and repositories
 Unlimited screenshots for public repositories| Argos GitHub app will allow Argos to read commits, mirror user accesses, and add pull-request statuses to notify about changes. It will be an extra step to your build and detect changes every PR. Once it detects a change, go to the Argos cli website to approve or reject the snapshot changes.|
| happo  | ? | ? | :x: |  :x: |  :x:  | |
| cypress-plugin-snapshots  | ? | ? | :white_check_mark:  | :white_check_mark:|  :white_check_mark:|Not possible to install (bound to an outdated version of cypress) |
| cypress-image-snapshot  | ? | ? | :white_check_mark:  | :white_check_mark:|  :white_check_mark:|Not possible to install (bound to an outdated version of cypress) |
| cypress-visual-regression  | 29.63%  | :x: | :white_check_mark:  | :white_check_mark:| :white_check_mark:| |
| **cypress-visual-regression-ressemble-js**  | **6.2%**  | :white_check_mark: | :white_check_mark:  | :white_check_mark:| :white_check_mark:| |
| cypress-blink-test  | ? | ? | :white_check_mark:  | :white_check_mark:|  :white_check_mark:|Not possible to install (bound to an outdated version of cypress) |
| Visual Regression Tracker | ? | ? | :x:  | :white_check_mark:|  :white_check_mark:|The client library is not working, requires Docker |
| cypress-image-diff | 30.1% | :x: | :white_check_mark:  | :white_check_mark:| :white_check_mark:| |
| micoocypress | 8.8518% | :white_check_mark: | :x: | :x: | :white_check_mark:| Requires Docker |
| cypress-visual-regression-diff | 14.7% |:white_check_mark: | ✅| ✅| :white_check_mark:| Requires manual installation of the sharp library on linux |
