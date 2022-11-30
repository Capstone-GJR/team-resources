jQuery("#simulation")
  .on("click", ".s-28cf8e94-f2d1-4cc3-b3d4-8e15e81d65d4 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Panel_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/43b1ff88-4f75-401c-9654-57d31567585d"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusin", ".s-28cf8e94-f2d1-4cc3-b3d4-8e15e81d65d4 .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Paragraph_72","#s-Path_94" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-28cf8e94-f2d1-4cc3-b3d4-8e15e81d65d4 #s-Input_11 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#000000",
                      "border-right-color": "#000000",
                      "border-bottom-color": "#000000",
                      "border-left-color": "#000000"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusout", ".s-28cf8e94-f2d1-4cc3-b3d4-8e15e81d65d4 .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_11")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNotEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_11",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-28cf8e94-f2d1-4cc3-b3d4-8e15e81d65d4 #s-Input_11 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#000000",
                      "border-right-width": "1.0px",
                      "border-right-color": "#000000",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#000000",
                      "border-left-width": "1.0px",
                      "border-left-color": "#000000"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Path_94" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-28cf8e94-f2d1-4cc3-b3d4-8e15e81d65d4 #s-Input_11 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#B3261E",
                      "border-right-width": "1.0px",
                      "border-right-color": "#B3261E",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#B3261E",
                      "border-left-width": "1.0px",
                      "border-left-color": "#B3261E"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Paragraph_72","#s-Path_94" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });