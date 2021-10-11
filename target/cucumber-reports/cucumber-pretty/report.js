$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Search.feature");
formatter.feature({
  "line": 1,
  "name": "Hepsiburada Feature",
  "description": "",
  "id": "hepsiburada-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7519841500,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Hepsiburada website login and add product to basket",
  "description": "",
  "id": "hepsiburada-feature;hepsiburada-website-login-and-add-product-to-basket",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User, Navigate Hepsiburada Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User, Check Homepage title",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "User, Click Homepage login button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User, Login to the system with e-mail and password",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User, Verify logged into the system",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User, Search the product in the search box",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User, Check the product pages url",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User, Checks product images",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User, Go to product details",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User, Add products to basket from two different seller",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User, Go to basket page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User, Verify products to basket",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User, Delete all products in basket",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStep.user_Navigate_Hepsiburada_Homepage()"
});
formatter.result({
  "duration": 112652000,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStep.user_Check_Homepage_title()"
});
formatter.result({
  "duration": 9777700,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStep.user_Click_Homepage_login_button()"
});
formatter.result({
  "duration": 2512174400,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.user_Login_to_the_system_with_e_mail_and_password()"
});
formatter.result({
  "duration": 2125149500,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStep.user_Verify_logged_into_the_system()"
});
formatter.result({
  "duration": 3964503800,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStep.user_Search_the_product_in_the_search_box()"
});
formatter.result({
  "duration": 317599800,
  "status": "passed"
});
formatter.match({
  "location": "ProductPageSteps.user_Check_the_product_pages_url()"
});
formatter.result({
  "duration": 16482200,
  "status": "passed"
});
formatter.match({
  "location": "ProductPageSteps.user_Checks_product_images()"
});
formatter.result({
  "duration": 20700,
  "status": "passed"
});
formatter.match({
  "location": "ProductPageSteps.user_Go_to_product_details()"
});
formatter.result({
  "duration": 8357629700,
  "status": "passed"
});
formatter.match({
  "location": "ProductPageSteps.user_Add_products_to_basket_from_two_different_seller()"
});
formatter.result({
  "duration": 11504246700,
  "status": "passed"
});
formatter.match({
  "location": "ProductPageSteps.user_Go_to_basket_page()"
});
formatter.result({
  "duration": 751727400,
  "status": "passed"
});
formatter.match({
  "location": "BasketPageSteps.user_Verify_products_to_basket_from()"
});
formatter.result({
  "duration": 60951325000,
  "status": "passed"
});
formatter.match({
  "location": "BasketPageSteps.user_Delete_all_products_in_basket_from()"
});
formatter.result({
  "duration": 2225673600,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d94.0.4606.81)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027BERKAY\u0027, ip: \u0027192.168.199.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 94.0.4606.81, chrome: {chromedriverVersion: 94.0.4606.61 (418b78f5838ed..., userDataDir: C:\\Users\\bdinc\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56197}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: bf3c09c9f6b26edbd03fc176bb093176\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat pages.BasketPage.deleteAllProductBasket(BasketPage.java:61)\r\n\tat step_definitions.BasketPageSteps.user_Delete_all_products_in_basket_from(BasketPageSteps.java:17)\r\n\tat ✽.Then User, Delete all products in basket(Search.feature:16)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 174538200,
  "status": "passed"
});
formatter.before({
  "duration": 4746739200,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Hepsiburada website login and add product to basket",
  "description": "",
  "id": "hepsiburada-feature;hepsiburada-website-login-and-add-product-to-basket",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "User, Navigate Hepsiburada Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "User, Check Homepage title",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User, Search the product in the search box",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User, Check the product pages url",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "User, Checks product images",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User, Go to product details",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "User, Add products to basket from two different seller",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User, Go to basket page",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "User, Verify products to basket",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User, Delete all products in basket",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStep.user_Navigate_Hepsiburada_Homepage()"
});
formatter.result({
  "duration": 153500,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStep.user_Check_Homepage_title()"
});
formatter.result({
  "duration": 43510600,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStep.user_Search_the_product_in_the_search_box()"
});
formatter.result({
  "duration": 515021300,
  "status": "passed"
});
formatter.match({
  "location": "ProductPageSteps.user_Check_the_product_pages_url()"
});
formatter.result({
  "duration": 11668800,
  "status": "passed"
});
formatter.match({
  "location": "ProductPageSteps.user_Checks_product_images()"
});
formatter.result({
  "duration": 32600,
  "status": "passed"
});
formatter.match({
  "location": "ProductPageSteps.user_Go_to_product_details()"
});
formatter.result({
  "duration": 7203166000,
  "status": "passed"
});
formatter.match({
  "location": "ProductPageSteps.user_Add_products_to_basket_from_two_different_seller()"
});
formatter.result({
  "duration": 8553510300,
  "status": "passed"
});
formatter.match({
  "location": "ProductPageSteps.user_Go_to_basket_page()"
});
formatter.result({
  "duration": 658466000,
  "status": "passed"
});
formatter.match({
  "location": "BasketPageSteps.user_Verify_products_to_basket_from()"
});
formatter.result({
  "duration": 19875568400,
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class step_definitions.BasketPageSteps\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:47)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:33)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat runner.TestRunner.feature(TestRunner.java:40)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:133)\r\n\tat org.testng.internal.TestInvoker.invokeMethod(TestInvoker.java:584)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethod(TestInvoker.java:172)\r\n\tat org.testng.internal.MethodRunner.runInSequence(MethodRunner.java:46)\r\n\tat org.testng.internal.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:804)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethods(TestInvoker.java:145)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:146)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:128)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1511)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:770)\r\n\tat org.testng.TestRunner.run(TestRunner.java:591)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:402)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:41)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:443)\r\n\tat org.testng.internal.thread.ThreadUtil.lambda$execute$0(ThreadUtil.java:67)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1130)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:630)\r\n\tat java.base/java.lang.Thread.run(Thread.java:832)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:41)\r\n\t... 33 more\r\nCaused by: org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d94.0.4606.81)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027BERKAY\u0027, ip: \u0027192.168.199.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 94.0.4606.81, chrome: {chromedriverVersion: 94.0.4606.61 (418b78f5838ed..., userDataDir: C:\\Users\\bdinc\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:54563}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 60fdcc3508c4dcdc735fa7bac76ea688\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027merchant_name_1NA4w\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementsByXPath(RemoteWebDriver.java:432)\r\n\tat org.openqa.selenium.By$ByXPath.findElements(By.java:348)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:311)\r\n\tat elements.BasketPageElements.\u003cinit\u003e(BasketPageElements.java:24)\r\n\tat pages.BasketPage.\u003cinit\u003e(BasketPage.java:15)\r\n\tat step_definitions.BasketPageSteps.\u003cinit\u003e(BasketPageSteps.java:8)\r\n\t... 39 more\r\n",
  "status": "failed"
});
formatter.match({
  "location": "BasketPageSteps.user_Delete_all_products_in_basket_from()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 12165137800,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d94.0.4606.81)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027BERKAY\u0027, ip: \u0027192.168.199.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 94.0.4606.81, chrome: {chromedriverVersion: 94.0.4606.61 (418b78f5838ed..., userDataDir: C:\\Users\\bdinc\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:54563}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 60fdcc3508c4dcdc735fa7bac76ea688\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\r\n\tat step_definitions.TestBaseHooks.tearDown(TestBaseHooks.java:30)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat runner.TestRunner.feature(TestRunner.java:40)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:133)\r\n\tat org.testng.internal.TestInvoker.invokeMethod(TestInvoker.java:584)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethod(TestInvoker.java:172)\r\n\tat org.testng.internal.MethodRunner.runInSequence(MethodRunner.java:46)\r\n\tat org.testng.internal.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:804)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethods(TestInvoker.java:145)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:146)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:128)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1511)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:770)\r\n\tat org.testng.TestRunner.run(TestRunner.java:591)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:402)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:41)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:443)\r\n\tat org.testng.internal.thread.ThreadUtil.lambda$execute$0(ThreadUtil.java:67)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1130)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:630)\r\n\tat java.base/java.lang.Thread.run(Thread.java:832)\r\n",
  "status": "failed"
});
});