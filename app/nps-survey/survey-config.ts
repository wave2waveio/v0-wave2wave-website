export const surveyJson = {
  "title": "Wave2Wave.io Customer Survey",
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "radiogroup",
          "name": "future_orders",
          "title": "Do you plan to order from Wave2Wave.io in the future?",
          "isRequired": true,
          "choices": [
            {
              "value": "yes",
              "text": "Yes"
            },
            {
              "value": "no_competitor",
              "text": "No - Buy cabling from someone else"
            },
            {
              "value": "no_need",
              "text": "No - Don't buy cabling products"
            },
            {
              "value": "maybe",
              "text": "Maybe - I might be in the future"
            }
          ]
        }
      ]
    },
    {
      "name": "page2",
      "visibleIf": "{future_orders} <> 'no_competitor' and {future_orders} <> 'no_need'",
      "elements": [
        {
          "type": "radiogroup",
          "name": "nps_rating",
          "title": "How likely are you to recommend Wave2Wave to a colleague or peer?",
          "isRequired": true,
          "choices": [
            {
              "value": 1,
              "text": "Absolutely not"
            },
            {
              "value": 2,
              "text": "Not likely"
            },
            {
              "value": 3,
              "text": "Not Sure"
            },
            {
              "value": 4,
              "text": "Very likely"
            },
            {
              "value": 5,
              "text": "Definitely"
            }
          ]
        }
      ]
    },
    {
      "name": "page3",
      "visibleIf": "{future_orders} <> 'no_competitor' and {future_orders} <> 'no_need'",
      "elements": [
        {
          "type": "checkbox",
          "name": "products_used",
          "title": "Which Wave2Wave products or services have you used?",
          "choices": [
            {
              "value": "fiber",
              "text": "Fiber infrastructure (trunk assemblies, patch cords)"
            },
            {
              "value": "high_speed",
              "text": "High Speed (AOC, AEC, DAC)"
            },
            {
              "value": "transceivers",
              "text": "Transceivers"
            },
            {
              "value": "ethernet",
              "text": "Ethernet cabling (cat5, cat6, etc.)"
            },
            {
              "value": "patch_panels",
              "text": "Patch panels & cassettes"
            },
            {
              "value": "power",
              "text": "Power cables"
            },
            {
              "value": "testing",
              "text": "Testing & lab tools"
            },
            {
              "value": "engineering",
              "text": "Custom engineering services"
            },
            {
              "value": "kitting",
              "text": "Deployment kitting"
            },
            {
              "value": "other",
              "text": "Other"
            }
          ],
          "showNoneItem": true,
          "showSelectAllItem": true
        }
      ]
    },
    {
      "name": "page4",
      "visibleIf": "{future_orders} <> 'no_competitor' and {future_orders} <> 'no_need'",
      "elements": [
        {
          "type": "comment",
          "name": "missing_products",
          "title": "Are there products or services you wish Wave2Wave offered that we currently don't?"
        }
      ]
    },
    {
      "name": "page5",
      "visibleIf": "{future_orders} <> 'no_competitor' and {future_orders} <> 'no_need'",
      "elements": [
        {
          "type": "matrix",
          "name": "satisfaction_ratings",
          "title": "How would you rate Wave2Wave in the following areas?",
          "columns": [
            "Very Dissatisfied",
            "Dissatisfied",
            {
              "value": "Neither",
              "text": "Neither Satisfied nor Dissatisfied"
            },
            "Satisfied",
            "Very Satisfied"
          ],
          "rows": [
            {
              "value": "Quality",
              "text": "Product Quality"
            },
            {
              "value": "Customization",
              "text": "Customization Options"
            },
            {
              "value": "Delivery",
              "text": "Delivery Speed"
            },
            {
              "value": "Labeling",
              "text": "Labeling & Documentation"
            },
            {
              "value": "Sales",
              "text": "Sales Responsiveness"
            },
            {
              "value": "Support",
              "text": "Technical Support"
            },
            {
              "value": "Pricing",
              "text": "Pricing/Value"
            }
          ]
        }
      ]
    },
    {
      "name": "page6",
      "visibleIf": "{future_orders} <> 'no_competitor' and {future_orders} <> 'no_need'",
      "elements": [
        {
          "type": "radiogroup",
          "name": "upcoming_projects",
          "title": "Do you have any upcoming projects where Wave2Wave could help?",
          "choices": [
            {
              "value": "no",
              "text": "No upcoming projects at this time"
            },
            {
              "value": "not_ready",
              "text": "Yes — but not ready to discuss yet"
            },
            {
              "value": "contact_me",
              "text": "Yes — please have someone reach out"
            }
          ]
        },
        {
          "type": "text",
          "name": "project_contact",
          "title": "Please confirm your email or phone #",
          "visibleIf": "{upcoming_projects} = 'contact_me'",
          "isRequired": true,
          "validators": [
            {
              "type": "regex",
              "text": "Please enter a valid email or phone number",
              "regex": "^([\\w\\.\\-]+@[\\w\\-]+\\.[a-zA-Z]{2,}|\\(?\\d{3}\\)?[-.\\s]?\\d{3}[-.\\s]?\\d{4})$"
            }
          ]
        }
      ]
    },
    {
      "name": "page7",
      "elements": [
        {
          "type": "comment",
          "name": "improvements",
          "title": "What could we improve?"
        }
      ]
    },
    {
      "name": "page8",
      "elements": [
        {
          "type": "radiogroup",
          "name": "may_followup",
          "title": "May we follow up with you about your feedback?",
          "choices": [
            {
              "value": "yes",
              "text": "Yes"
            },
            {
              "value": "no",
              "text": "No"
            }
          ]
        },
        {
          "type": "text",
          "name": "followup_contact",
          "title": "Please confirm your email or phone #",
          "visibleIf": "{may_followup} = 'yes'",
          "isRequired": true,
          "validators": [
            {
              "type": "regex",
              "text": "Please enter a valid email or phone number",
              "regex": "^([\\w\\.\\-]+@[\\w\\-]+\\.[a-zA-Z]{2,}|\\(?\\d{3}\\)?[-.\\s]?\\d{3}[-.\\s]?\\d{4})$"
            }
          ]
        }
      ]
    },
    {
      "name": "page9",
      "elements": [
        {
          "type": "checkbox",
          "name": "role",
          "title": "What best describes your role?",
          "choices": [
            "Network / Infrastructure Engineer",
            "Data Center Manager / Operator",
            "IT Director / Manager",
            "Procurement / Supply Chain",
            "Executive / C-Level",
            "Lab / Test Engineer"
          ],
          "showOtherItem": true,
          "showNoneItem": true
        }
      ]
    },
    {
      "name": "page10",
      "elements": [
        {
          "type": "checkbox",
          "name": "organization_type",
          "title": "What type of organization do you work for?",
          "choices": [
            "Hyperscaler",
            "Enterprise",
            "Colocation provider",
            "Telecom / Service provider",
            "Government / Public sector",
            "System integrator / VAR"
          ],
          "showOtherItem": true,
          "showNoneItem": true
        }
      ]
    }
  ],
  "showProgressBar": "top",
  "progressBarType": "pages",
  "showQuestionNumbers": "off",
  "headerView": "advanced"
}
