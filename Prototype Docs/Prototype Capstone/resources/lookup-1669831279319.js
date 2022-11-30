(function(window, undefined) {
  var dictionary = {
    "360d26a7-d167-4cd9-966e-0160be113591": "Space 1 Settings Mobile",
    "28cf8e94-f2d1-4cc3-b3d4-8e15e81d65d4": "Settings Mobile",
    "7c3ace79-4c10-41fe-bf06-6385ed2574aa": "User Landing Page Mobile",
    "2376c00d-3814-4c35-b2dc-bc1fe7b2a84e": "Add Component Mobile",
    "9bde8650-c36d-4364-bcc3-beefe5f08e9d": "Register Mobile",
    "43b1ff88-4f75-401c-9654-57d31567585d": "Add Space Mobile",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Welcome Mobile",
    "76cafc4e-57e4-4ae0-bfb5-bb7884cf6b96": "Login Mobile",
    "81861cd6-96eb-4f56-96b2-b16a8d531cf5": "Forgot Password Mobile",
    "9065f091-e8bc-47a7-ae58-2ed53e907987": "Space 1 Landing Mobile",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "General Template ",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);