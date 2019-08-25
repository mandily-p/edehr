export default function () {
  return {
    testPage: {
      pageDataKey: 'testPage',
      pageTitle: 'Test Page',
      pIndex: '40',
      isV2: true,
      hasGridTable: true,
      hasGridForm: true,
      pageChildren: [
        {
          elementKey: 'pform_label',
          formIndex: '1',
          inputType: 'form_label',
          label: '<b>a form <i>label</i></b>',
          fqn: 'testPage.pform_label'
        },
        {
          elementKey: 'pspacer',
          formIndex: '1',
          inputType: 'spacer',
          label: 'spacer',
          fqn: 'testPage.pspacer'
        },
        {
          elementKey: 'weight',
          defaultValue: '80',
          formIndex: '1',
          inputType: 'text',
          label: 'Weight',
          mandatory: true,
          suffix: 'lb',
          validation: 'isNumber',
          fqn: 'testPage.weight'
        },
        {
          elementKey: 'pcheckbox',
          defaultValue: true,
          formIndex: '1',
          helperText: 'a checkbox iinput',
          inputType: 'checkbox',
          label: 'checkbox',
          fqn: 'testPage.pcheckbox',
          helperHtml: '<p>a checkbox iinput</p>'
        },
        {
          elementKey: 'defaultText',
          defaultValue: 'some default',
          dependantOn: 'pcheckbox',
          formIndex: '1',
          helperText: 'a text input',
          inputType: 'text',
          label: 'text',
          fqn: 'testPage.defaultText',
          helperHtml: '<p>a text input</p>'
        },
        {
          elementKey: 'passetLink',
          formIndex: '1',
          inputType: 'assetLink',
          label: 'assetLink',
          fqn: 'testPage.passetLink'
        },
        {
          elementKey: 'pselect',
          formIndex: '1',
          inputType: 'select',
          label: 'select',
          options: [
            {
              text: '1=a choice 1'
            },
            {
              text: '2=b choice 1'
            },
            {
              text: '3=c choice 1'
            }
          ],
          passToFunction: 'p-cValue1',
          fqn: 'testPage.pselect'
        },
        {
          elementKey: 'pselect2',
          formIndex: '1',
          inputType: 'select',
          label: 'select',
          options: [
            {
              text: '1=a choice 2'
            },
            {
              text: '2=b choice 2'
            },
            {
              text: '3=c choice 2'
            }
          ],
          passToFunction: 'p-cValue1',
          fqn: 'testPage.pselect2'
        },
        {
          elementKey: 'p-cValue1',
          formIndex: '1',
          helperText: 'a calculated value based on the select \'pselect1\' on this page',
          inputType: 'calculatedValue',
          label: 'calculatedValue',
          fqn: 'testPage.p-cValue1',
          helperHtml: '<p>a calculated value based on the select \'pselect1\' on this page</p>'
        },
        {
          elementKey: 'pcheckset',
          defaultValue: 'check1,all',
          formIndex: '1',
          inputType: 'checkset',
          label: 'checkset',
          options: [
            {
              text: 'check1=check option 1'
            },
            {
              text: 'check2=check option 2'
            },
            {
              text: 'other=another option'
            },
            {
              text: 'all=all options are selectable'
            }
          ],
          fqn: 'testPage.pcheckset'
        },
        {
          elementKey: 'dayValue',
          formIndex: '1',
          inputType: 'day',
          label: 'Day',
          mandatory: true,
          validation: 'isDay',
          fqn: 'testPage.dayValue'
        },
        {
          elementKey: 'timeValue',
          formIndex: '1',
          inputType: 'time',
          label: 'Time',
          mandatory: true,
          validation: 'isTime',
          fqn: 'testPage.timeValue'
        },
        {
          elementKey: 'forCalc',
          formIndex: '1',
          inputType: 'select',
          label: 'select',
          options: [
            {
              text: '1 = Yes'
            },
            {
              text: '2 = No'
            }
          ],
          passToFunction: 'p-cValue2',
          fqn: 'testPage.forCalc'
        },
        {
          elementKey: 'p-cValue2',
          formIndex: '1',
          inputType: 'calculatedValue',
          label: 'calculatedValue',
          fqn: 'testPage.p-cValue2'
        },
        {
          elementKey: 'pcheckbox2',
          formIndex: '1',
          inputType: 'checkbox',
          label: 'checkbox',
          fqn: 'testPage.pcheckbox2'
        },
        {
          elementKey: 'ptext2',
          dependantOn: 'pcheckbox2',
          formIndex: '1',
          formOption: 'hideLabel',
          inputType: 'text',
          label: 'text',
          fqn: 'testPage.ptext2'
        },
        {
          elementKey: 'pform_label2',
          formIndex: '1',
          inputType: 'form_label',
          label: '<b>a form <i>label</i></b>',
          fqn: 'testPage.pform_label2'
        },
        {
          elementKey: 'pspacer2',
          formIndex: '1',
          inputType: 'spacer',
          label: 'spacer',
          fqn: 'testPage.pspacer2'
        },
        {
          elementKey: 'passetLink2',
          assetBase: 'standardized-assessment-tools',
          assetName: 'the-canadian-ed-triage-and-acuity-scale.gif',
          formIndex: '1',
          inputType: 'assetLink',
          label: 'assetLink',
          fqn: 'testPage.passetLink2'
        },
        {
          elementKey: 'pdate2',
          formIndex: '1',
          inputType: 'date',
          label: 'date',
          fqn: 'testPage.pdate2'
        },
        {
          elementKey: 't1',
          formIndex: '2',
          inputType: 'text',
          label: 'Text 1',
          tableColumn: '1',
          fqn: 'testPage.t1'
        },
        {
          elementKey: 't2',
          formIndex: '2',
          helperText: 'a text input',
          inputType: 'text',
          label: 'Text 2',
          tableColumn: '2',
          fqn: 'testPage.t2',
          helperHtml: '<p>a text input</p>'
        },
        {
          elementKey: 'name',
          formIndex: '3',
          inputType: 'text',
          label: 'Name',
          fqn: 'testPage.name'
        },
        {
          elementKey: 'place',
          formIndex: '3',
          inputType: 'text',
          label: 'Place',
          fqn: 'testPage.place'
        }
      ],
      generated: '2019-08-24T10:12:12-07:00',
      pageElements: {
        form1: {
          elementKey: 'form1',
          label: 'Form 1',
          formKey: 'form1',
          isPageForm: true,
          ehr_groups: [
            {
              label: 'A group label',
              gIndex: '1',
              gChildren: [
                'pform_label',
                'pspacer',
                'weight',
                'pcheckbox',
                'defaultText',
                'passetLink',
                'pselect',
                'pselect2',
                'p-cValue1'
              ]
            },
            {
              label: 'Second group',
              gIndex: '2',
              gChildren: [
                {
                  label: 'subgroup 1',
                  elementKey: 'subgroup3',
                  sgChildren: [
                    'pcheckset'
                  ]
                },
                {
                  label: 'subgroup 2',
                  elementKey: 'subgroup4',
                  sgChildren: [
                    'dayValue',
                    'timeValue',
                    'forCalc',
                    'p-cValue2'
                  ]
                },
                {
                  label: 'subgroup 3',
                  elementKey: 'subgroup5',
                  sgChildren: [
                    'pcheckbox2',
                    'ptext2',
                    'pform_label2',
                    'pspacer2',
                    'passetLink2',
                    'pdate2'
                  ]
                }
              ]
            }
          ]
        },
        table1: {
          elementKey: 'table1',
          tableKey: 'table1',
          isTable: true,
          label: 'Test table 1',
          addButtonText: 'Add a row to the test table',
          ehr_list: [
            {
              label: 'Text 1',
              ehr_list_index: '1',
              items: [
                't1'
              ]
            },
            {
              label: 'Text 2',
              ehr_list_index: '2',
              items: [
                't2'
              ]
            }
          ],
          form: {
            elementKey: 'table1',
            label: 'Test table 1',
            addButtonText: 'Add a row to the test table',
            formKey: 'table1',
            ehr_groups: [
              {
                label: 'Group 1',
                gIndex: '1',
                gChildren: [
                  't1',
                  't2'
                ]
              }
            ],
            ehr_data: {
              t1: '',
              t2: ''
            }
          }
        },
        form2: {
          elementKey: 'form2',
          label: 'Form 2',
          formKey: 'form2',
          isPageForm: true,
          ehr_groups: [
            {
              label: 'A group label',
              gIndex: '1',
              gChildren: [
                'name',
                'place'
              ]
            }
          ]
        }
      }
    },
    testTable: {
      pageDataKey: 'testTable',
      pageTitle: 'Test Table',
      pIndex: '41',
      isV2: true,
      hasGridTable: true,
      pageChildren: [
        {
          elementKey: 'e1',
          formIndex: '1',
          inputType: 'form_label',
          label: '<b>a form <i>label</i></b>',
          fqn: 'testTable.e1'
        },
        {
          elementKey: 'e2',
          formIndex: '1',
          inputType: 'spacer',
          label: 'spacer',
          fqn: 'testTable.e2'
        },
        {
          elementKey: 'weight',
          defaultValue: '80',
          formIndex: '1',
          inputType: 'text',
          label: 'Weight',
          mandatory: true,
          suffix: 'lb',
          tableColumn: '2',
          validation: 'isNumber',
          fqn: 'testTable.weight'
        },
        {
          elementKey: 'pcheckbox',
          defaultValue: true,
          formIndex: '1',
          helperText: 'a checkbox iinput',
          inputType: 'checkbox',
          label: 'checkbox',
          tableColumn: '1',
          fqn: 'testTable.pcheckbox',
          helperHtml: '<p>a checkbox iinput</p>'
        },
        {
          elementKey: 'defaultText',
          defaultValue: 'some default',
          dependantOn: 'pcheckbox',
          formIndex: '1',
          helperText: 'a text input',
          inputType: 'text',
          label: 'text',
          tableColumn: '3',
          tableCss: 'hr-table',
          fqn: 'testTable.defaultText',
          helperHtml: '<p>a text input</p>'
        },
        {
          elementKey: 'e6',
          assetBase: 'standardized-assessment-tools',
          assetName: 'the-canadian-ed-triage-and-acuity-scale.gif',
          formIndex: '1',
          inputType: 'assetLink',
          label: 'assetLink',
          fqn: 'testTable.e6'
        },
        {
          elementKey: 'e7',
          formIndex: '1',
          inputType: 'select',
          label: 'select',
          options: [
            {
              text: '1=a choice 1'
            },
            {
              text: '2=b choice 1'
            },
            {
              text: '3=c choice 1'
            }
          ],
          passToFunction: 'p-cValue1',
          tableColumn: '5',
          fqn: 'testTable.e7'
        },
        {
          elementKey: 'e8',
          formIndex: '1',
          inputType: 'select',
          label: 'select',
          options: [
            {
              text: '1=a choice 2'
            },
            {
              text: '2=b choice 2'
            },
            {
              text: '3=c choice 2'
            }
          ],
          passToFunction: 'p-cValue1',
          tableColumn: '5',
          fqn: 'testTable.e8'
        },
        {
          elementKey: 'p-cValue1',
          formIndex: '1',
          helperText: 'a calculated value based on the select \'pselect1\' on this page',
          inputType: 'calculatedValue',
          label: 'calculatedValue',
          tableColumn: '5',
          fqn: 'testTable.p-cValue1',
          helperHtml: '<p>a calculated value based on the select \'pselect1\' on this page</p>'
        },
        {
          elementKey: 'e10',
          defaultValue: 'check1,other',
          formIndex: '1',
          inputType: 'checkset',
          label: 'checkset',
          options: [
            {
              text: 'check1=check option 1'
            },
            {
              text: 'check2=check option 2'
            },
            {
              text: 'other=another option'
            },
            {
              text: 'all=all options are selectable'
            }
          ],
          tableColumn: '4',
          fqn: 'testTable.e10'
        },
        {
          elementKey: 'dayValue',
          formIndex: '1',
          inputType: 'day',
          label: 'Day',
          mandatory: true,
          tableColumn: '7',
          validation: 'isDay',
          fqn: 'testTable.dayValue'
        },
        {
          elementKey: 'timeValue',
          formIndex: '1',
          inputType: 'time',
          label: 'Time',
          mandatory: true,
          tableColumn: '8',
          validation: 'isTime',
          fqn: 'testTable.timeValue'
        },
        {
          elementKey: 'forCalc',
          formIndex: '1',
          inputType: 'select',
          label: 'select',
          options: [
            {
              text: '1 = Yes'
            },
            {
              text: '2 = No'
            }
          ],
          passToFunction: 'p-cValue2',
          tableColumn: '9',
          fqn: 'testTable.forCalc'
        },
        {
          elementKey: 'p-cValue2',
          formIndex: '1',
          inputType: 'calculatedValue',
          label: 'calculatedValue',
          tableColumn: '10',
          fqn: 'testTable.p-cValue2'
        },
        {
          elementKey: 'g4',
          formIndex: '1',
          inputType: 'checkbox',
          label: 'checkbox',
          tableColumn: '12',
          fqn: 'testTable.g4'
        },
        {
          elementKey: 'g5',
          dependantOn: 'g4',
          formIndex: '1',
          inputType: 'text',
          label: 'text',
          tableColumn: '13',
          fqn: 'testTable.g5'
        },
        {
          elementKey: 'g6',
          formIndex: '1',
          inputType: 'form_label',
          label: '<b>a form <i>label</i></b>',
          tableColumn: '14',
          fqn: 'testTable.g6'
        },
        {
          elementKey: 'g7',
          formIndex: '1',
          inputType: 'spacer',
          label: 'spacer',
          fqn: 'testTable.g7'
        },
        {
          elementKey: 'g8',
          assetBase: 'standardized-assessment-tools',
          assetName: 'the-canadian-ed-triage-and-acuity-scale.gif',
          formIndex: '1',
          inputType: 'assetLink',
          label: 'assetLink',
          fqn: 'testTable.g8'
        },
        {
          elementKey: 'g9',
          formIndex: '1',
          inputType: 'date',
          label: 'date',
          tableColumn: '15',
          fqn: 'testTable.g9'
        },
        {
          elementKey: 'e11',
          formIndex: '1',
          formCss: 'full-width',
          inputType: 'textarea',
          label: 'textarea',
          tableColumn: '6',
          tableCss: 'hr-table',
          fqn: 'testTable.e11'
        },
        {
          elementKey: 'record_header',
          formIndex: '2',
          inputType: 'record_header',
          tableColumn: '1',
          fqn: 'testTable.record_header'
        },
        {
          elementKey: 'referralName',
          formIndex: '2',
          inputType: 'text',
          label: 'Referral name',
          tableColumn: '3',
          fqn: 'testTable.referralName'
        },
        {
          elementKey: 'referralProfession',
          formIndex: '2',
          inputType: 'text',
          label: 'Referral profession',
          tableColumn: '3',
          fqn: 'testTable.referralProfession'
        },
        {
          elementKey: 'spacer1',
          formIndex: '2',
          inputType: 'spacer',
          label: 'even spacers need a element key',
          fqn: 'testTable.spacer1'
        },
        {
          elementKey: 'appointmentDate',
          formIndex: '2',
          inputType: 'date',
          label: 'Appointment date',
          tableColumn: '4',
          fqn: 'testTable.appointmentDate'
        },
        {
          elementKey: 'appointmentTime',
          formIndex: '2',
          inputType: 'time',
          label: 'Appointment time',
          tableColumn: '4',
          fqn: 'testTable.appointmentTime'
        },
        {
          elementKey: 'status',
          formIndex: '2',
          inputType: 'select',
          label: 'Status',
          options: [
            {
              text: 'Active'
            },
            {
              text: 'Discharged'
            }
          ],
          tableColumn: '5',
          fqn: 'testTable.status'
        }
      ],
      generated: '2019-08-24T10:12:12-07:00',
      pageElements: {
        table1: {
          elementKey: 'table1',
          tableKey: 'table1',
          isTable: true,
          label: 'Test table 1',
          addButtonText: 'Add a row to the test table',
          ehr_list: [
            {
              label: 'A bool',
              ehr_list_index: '1',
              items: [
                'pcheckbox'
              ]
            },
            {
              label: 'Wieght',
              ehr_list_index: '2',
              items: [
                'weight'
              ]
            },
            {
              label: 'Text',
              ehr_list_index: '3',
              items: [
                'defaultText'
              ]
            },
            {
              label: 'Set',
              ehr_list_index: '4',
              items: [
                'e10'
              ]
            },
            {
              label: 'Stack1',
              ehr_list_index: '5',
              items: [
                'e7',
                'e8',
                'p-cValue1'
              ]
            },
            {
              label: 'Long text',
              ehr_list_index: '6',
              items: [
                'e11'
              ]
            },
            {
              label: 'Day',
              ehr_list_index: '7',
              items: [
                'dayValue'
              ]
            },
            {
              label: 'Time',
              ehr_list_index: '8',
              items: [
                'timeValue'
              ]
            },
            {
              label: 'Source',
              ehr_list_index: '9',
              items: [
                'forCalc'
              ]
            },
            {
              label: 'Calculated',
              ehr_list_index: '10',
              items: [
                'p-cValue2'
              ]
            },
            {
              label: 'Bool',
              ehr_list_index: '12',
              items: [
                'g4'
              ]
            },
            {
              label: 'Text',
              ehr_list_index: '13',
              items: [
                'g5'
              ]
            },
            {
              label: 'Lable',
              ehr_list_index: '14',
              items: [
                'g6'
              ]
            },
            {
              label: 'Date',
              ehr_list_index: '15',
              items: [
                'g9'
              ]
            }
          ],
          form: {
            elementKey: 'table1',
            label: 'Test table 1',
            addButtonText: 'Add a row to the test table',
            formKey: 'table1',
            ehr_groups: [
              {
                label: 'Group 1',
                gIndex: '1',
                gChildren: [
                  'e1',
                  'e2',
                  'weight',
                  'pcheckbox',
                  'defaultText',
                  'e6',
                  'e7',
                  'e8',
                  'p-cValue1'
                ]
              },
              {
                gIndex: '2',
                gChildren: [
                  {
                    label: 'subgroup 1',
                    elementKey: 'subgroup10',
                    sgChildren: [
                      'e10'
                    ]
                  },
                  {
                    label: 'subgroup 2',
                    elementKey: 'subgroup11',
                    sgChildren: [
                      'dayValue',
                      'timeValue',
                      'forCalc',
                      'p-cValue2'
                    ]
                  },
                  {
                    label: 'subgroup 3',
                    elementKey: 'subgroup12',
                    sgChildren: [
                      'g4',
                      'g5',
                      'g6',
                      'g7',
                      'g8',
                      'g9'
                    ]
                  }
                ]
              },
              {
                gIndex: '3',
                gChildren: [
                  'e11'
                ]
              }
            ],
            ehr_data: {
              weight: '80',
              pcheckbox: true,
              defaultText: 'some default',
              e7: '',
              e8: '',
              'p-cValue1': '',
              e10: 'check1,other',
              dayValue: '',
              timeValue: '',
              forCalc: '',
              'p-cValue2': '',
              g4: '',
              g5: '',
              g9: '',
              e11: ''
            }
          }
        },
        stacked: {
          elementKey: 'stacked',
          tableKey: 'stacked',
          isTable: true,
          label: 'Stacked table',
          addButtonText: 'Add a referral',
          ehr_list: [
            {
              ehr_list_index: '1',
              items: [
                'record_header'
              ]
            },
            {
              label: 'Referral',
              ehr_list_index: '3',
              items: [
                'referralName',
                'referralProfession'
              ]
            },
            {
              label: 'Appointment',
              ehr_list_index: '4',
              items: [
                'appointmentDate',
                'appointmentTime'
              ]
            },
            {
              label: 'Status',
              ehr_list_index: '5',
              items: [
                'status'
              ]
            }
          ],
          form: {
            elementKey: 'stacked',
            label: 'Stacked table',
            addButtonText: 'Add a referral',
            formKey: 'stacked',
            ehr_groups: [
              {
                gIndex: '1',
                gChildren: [
                  'record_header'
                ]
              },
              {
                gIndex: '2',
                gChildren: [
                  'referralName',
                  'referralProfession',
                  'spacer1',
                  'appointmentDate',
                  'appointmentTime',
                  'status'
                ]
              }
            ],
            ehr_data: {
              referralName: '',
              referralProfession: '',
              appointmentDate: '',
              appointmentTime: '',
              status: ''
            }
          }
        }
      }
    }
  }
}