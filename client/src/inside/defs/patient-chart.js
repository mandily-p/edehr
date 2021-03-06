/* eslint-disable quotes */
export default function () {
  return {
    progressNotes: {
      pageTitle: "Progress notes",
      pageDataKey: "progressNotes",
      pageChildren: [
        {
          label: "Name",
          elementKey: "name",
          fqn: "progressNotes.table.name"
        },
        {
          label: "Profession",
          elementKey: "profession",
          fqn: "progressNotes.table.profession"
        },
        {
          label: "Day",
          elementKey: "day",
          fqn: "progressNotes.table.day"
        },
        {
          label: "Time",
          elementKey: "time",
          fqn: "progressNotes.table.time"
        },
        {
          label: "Progress notes",
          elementKey: "notes",
          fqn: "progressNotes.table.notes",
          dataCaseStudy: "Erin Johns is 74 years old. She is widowed with four children, one of whom lives at home with her in their original family home. Two of Erins children live within a one-hour drive from her, and one lives a three-hour flight away. She also has 10 grandchildren and one great grandchild. Erin describes herself as a non-smoker, but she smoked socially when she was in her early twenties for about five years. She is a retired hairdresser."
        }
      ],
      generated: "2019-04-10T11:07:18-07:00",
      hasTable: true,
      tables: [
        {
          tableKey: "table",
          addButtonText: "Add a progress note",
          tableCells: [
            {
              label: "Name",
              pageDataKey: "progressNotes",
              level2Key: "table",
              elementKey: "name",
              inputType: "text",
              formRow: "1",
              formColumn: "1",
              formCss: "user_name",
              tableColumn: "1",
              dataParent: "progressNotes.table",
              fqn: "progressNotes.table.name",
              tableKey: "table"
            },
            {
              label: "Profession",
              pageDataKey: "progressNotes",
              level2Key: "table",
              elementKey: "profession",
              inputType: "text",
              formRow: "1",
              formColumn: "2",
              formCss: "user_pro",
              tableColumn: "2",
              dataParent: "progressNotes.table",
              fqn: "progressNotes.table.profession",
              tableKey: "table"
            },
            {
              label: "Day",
              pageDataKey: "progressNotes",
              level2Key: "table",
              elementKey: "day",
              inputType: "day",
              formRow: "1",
              formColumn: "3",
              formCss: "user_day",
              tableColumn: "3",
              dataParent: "progressNotes.table",
              fqn: "progressNotes.table.day",
              tableKey: "table"
            },
            {
              label: "Time",
              pageDataKey: "progressNotes",
              level2Key: "table",
              elementKey: "time",
              inputType: "time",
              formRow: "1",
              formColumn: "4",
              formCss: "user_time",
              tableColumn: "4",
              dataParent: "progressNotes.table",
              fqn: "progressNotes.table.time",
              tableKey: "table"
            },
            {
              label: "Progress notes",
              pageDataKey: "progressNotes",
              level2Key: "table",
              elementKey: "notes",
              inputType: "textarea",
              formRow: "2",
              formColumn: "1",
              tableColumn: "6",
              dataParent: "progressNotes.table",
              fqn: "progressNotes.table.notes",
              tableKey: "table"
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: "1",
                elements: [
                  {
                    label: "Name",
                    pageDataKey: "progressNotes",
                    level2Key: "table",
                    elementKey: "name",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "1",
                    formCss: "user_name",
                    tableColumn: "1",
                    dataParent: "progressNotes.table",
                    fqn: "progressNotes.table.name",
                    tableKey: "table"
                  },
                  {
                    label: "Profession",
                    pageDataKey: "progressNotes",
                    level2Key: "table",
                    elementKey: "profession",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "2",
                    formCss: "user_pro",
                    tableColumn: "2",
                    dataParent: "progressNotes.table",
                    fqn: "progressNotes.table.profession",
                    tableKey: "table"
                  },
                  {
                    label: "Day",
                    pageDataKey: "progressNotes",
                    level2Key: "table",
                    elementKey: "day",
                    inputType: "day",
                    formRow: "1",
                    formColumn: "3",
                    formCss: "user_day",
                    tableColumn: "3",
                    dataParent: "progressNotes.table",
                    fqn: "progressNotes.table.day",
                    tableKey: "table"
                  },
                  {
                    label: "Time",
                    pageDataKey: "progressNotes",
                    level2Key: "table",
                    elementKey: "time",
                    inputType: "time",
                    formRow: "1",
                    formColumn: "4",
                    formCss: "user_time",
                    tableColumn: "4",
                    dataParent: "progressNotes.table",
                    fqn: "progressNotes.table.time",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    label: "Progress notes",
                    pageDataKey: "progressNotes",
                    level2Key: "table",
                    elementKey: "notes",
                    inputType: "textarea",
                    formRow: "2",
                    formColumn: "1",
                    tableColumn: "6",
                    dataParent: "progressNotes.table",
                    fqn: "progressNotes.table.notes",
                    tableKey: "table"
                  }
                ]
              }
            ],
            columnsCount: 4
          }
        }
      ],
      pageData: {
        table: []
      }
    },
    carePlan: {
      pageTitle: "Interprofessional plan of care",
      pageDataKey: "carePlan",
      pageChildren: [
        {
          label: "Name",
          elementKey: "name",
          fqn: "carePlan.table2.name"
        },
        {
          label: "Profession",
          elementKey: "profession",
          fqn: "carePlan.table2.profession"
        },
        {
          label: "Day",
          elementKey: "day",
          fqn: "carePlan.table2.day"
        },
        {
          label: "Time",
          elementKey: "time",
          fqn: "carePlan.table2.time"
        },
        {
          label: "Clinical issue",
          elementKey: "clinical",
          fqn: "carePlan.table2.clinical"
        },
        {
          label: "Goal of care",
          elementKey: "goal",
          fqn: "carePlan.table2.goal"
        },
        {
          label: "Intervention",
          elementKey: "interventions",
          fqn: "carePlan.table2.interventions"
        },
        {
          label: "Evaluation of intervention",
          elementKey: "evaluation",
          fqn: "carePlan.table2.evaluation"
        },
        {
          label: "Status",
          elementKey: "status",
          fqn: "carePlan.table2.status"
        }
      ],
      generated: "2019-04-10T11:07:18-07:00",
      hasTable: true,
      tables: [
        {
          tableKey: "table2",
          addButtonText: "Add a care plan",
          tableCells: [
            {
              label: "Name",
              pageDataKey: "carePlan",
              level2Key: "table2",
              elementKey: "name",
              inputType: "text",
              formRow: "1",
              formColumn: "1",
              tableColumn: "1",
              dataParent: "carePlan.table2",
              fqn: "carePlan.table2.name",
              tableKey: "table2"
            },
            {
              label: "Profession",
              pageDataKey: "carePlan",
              level2Key: "table2",
              elementKey: "profession",
              inputType: "text",
              formRow: "1",
              formColumn: "2",
              tableColumn: "2",
              dataParent: "carePlan.table2",
              fqn: "carePlan.table2.profession",
              tableKey: "table2"
            },
            {
              label: "Day",
              pageDataKey: "carePlan",
              level2Key: "table2",
              elementKey: "day",
              inputType: "day",
              formRow: "1",
              formColumn: "3",
              tableColumn: "3",
              dataParent: "carePlan.table2",
              fqn: "carePlan.table2.day",
              tableKey: "table2"
            },
            {
              label: "Time",
              pageDataKey: "carePlan",
              level2Key: "table2",
              elementKey: "time",
              inputType: "time",
              formRow: "1",
              formColumn: "4",
              tableColumn: "4",
              tableCss: "hr-table",
              dataParent: "carePlan.table2",
              fqn: "carePlan.table2.time",
              tableKey: "table2"
            },
            {
              label: "Clinical issue",
              pageDataKey: "carePlan",
              level2Key: "table2",
              elementKey: "clinical",
              inputType: "textarea",
              formRow: "2",
              formColumn: "1",
              tableColumn: "5",
              dataParent: "carePlan.table2",
              fqn: "carePlan.table2.clinical",
              tableKey: "table2"
            },
            {
              label: "Goal of care",
              pageDataKey: "carePlan",
              level2Key: "table2",
              elementKey: "goal",
              inputType: "textarea",
              formRow: "2",
              formColumn: "2",
              tableColumn: "6",
              dataParent: "carePlan.table2",
              fqn: "carePlan.table2.goal",
              tableKey: "table2"
            },
            {
              label: "Intervention",
              pageDataKey: "carePlan",
              level2Key: "table2",
              elementKey: "interventions",
              inputType: "textarea",
              formRow: "3",
              formColumn: "1",
              tableColumn: "7",
              dataParent: "carePlan.table2",
              fqn: "carePlan.table2.interventions",
              tableKey: "table2"
            },
            {
              label: "Evaluation of intervention",
              pageDataKey: "carePlan",
              level2Key: "table2",
              elementKey: "evaluation",
              inputType: "textarea",
              formRow: "3",
              formColumn: "2",
              tableColumn: "8",
              dataParent: "carePlan.table2",
              fqn: "carePlan.table2.evaluation",
              tableKey: "table2"
            },
            {
              label: "Status",
              pageDataKey: "carePlan",
              level2Key: "table2",
              elementKey: "status",
              inputType: "select",
              formRow: "4",
              formColumn: "1",
              formCss: "is-one-third",
              tableColumn: "9",
              options: [
                {
                  text: "Active"
                },
                {
                  text: "In progress"
                },
                {
                  text: "Complete"
                }
              ],
              dataParent: "carePlan.table2",
              fqn: "carePlan.table2.status",
              tableKey: "table2"
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: "1",
                elements: [
                  {
                    label: "Name",
                    pageDataKey: "carePlan",
                    level2Key: "table2",
                    elementKey: "name",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "1",
                    tableColumn: "1",
                    dataParent: "carePlan.table2",
                    fqn: "carePlan.table2.name",
                    tableKey: "table2"
                  },
                  {
                    label: "Profession",
                    pageDataKey: "carePlan",
                    level2Key: "table2",
                    elementKey: "profession",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "2",
                    tableColumn: "2",
                    dataParent: "carePlan.table2",
                    fqn: "carePlan.table2.profession",
                    tableKey: "table2"
                  },
                  {
                    label: "Day",
                    pageDataKey: "carePlan",
                    level2Key: "table2",
                    elementKey: "day",
                    inputType: "day",
                    formRow: "1",
                    formColumn: "3",
                    tableColumn: "3",
                    dataParent: "carePlan.table2",
                    fqn: "carePlan.table2.day",
                    tableKey: "table2"
                  },
                  {
                    label: "Time",
                    pageDataKey: "carePlan",
                    level2Key: "table2",
                    elementKey: "time",
                    inputType: "time",
                    formRow: "1",
                    formColumn: "4",
                    tableColumn: "4",
                    tableCss: "hr-table",
                    dataParent: "carePlan.table2",
                    fqn: "carePlan.table2.time",
                    tableKey: "table2"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    label: "Clinical issue",
                    pageDataKey: "carePlan",
                    level2Key: "table2",
                    elementKey: "clinical",
                    inputType: "textarea",
                    formRow: "2",
                    formColumn: "1",
                    tableColumn: "5",
                    dataParent: "carePlan.table2",
                    fqn: "carePlan.table2.clinical",
                    tableKey: "table2"
                  },
                  {
                    label: "Goal of care",
                    pageDataKey: "carePlan",
                    level2Key: "table2",
                    elementKey: "goal",
                    inputType: "textarea",
                    formRow: "2",
                    formColumn: "2",
                    tableColumn: "6",
                    dataParent: "carePlan.table2",
                    fqn: "carePlan.table2.goal",
                    tableKey: "table2"
                  }
                ]
              },
              {
                formRow: "3",
                elements: [
                  {
                    label: "Intervention",
                    pageDataKey: "carePlan",
                    level2Key: "table2",
                    elementKey: "interventions",
                    inputType: "textarea",
                    formRow: "3",
                    formColumn: "1",
                    tableColumn: "7",
                    dataParent: "carePlan.table2",
                    fqn: "carePlan.table2.interventions",
                    tableKey: "table2"
                  },
                  {
                    label: "Evaluation of intervention",
                    pageDataKey: "carePlan",
                    level2Key: "table2",
                    elementKey: "evaluation",
                    inputType: "textarea",
                    formRow: "3",
                    formColumn: "2",
                    tableColumn: "8",
                    dataParent: "carePlan.table2",
                    fqn: "carePlan.table2.evaluation",
                    tableKey: "table2"
                  }
                ]
              },
              {
                formRow: "4",
                elements: [
                  {
                    label: "Status",
                    pageDataKey: "carePlan",
                    level2Key: "table2",
                    elementKey: "status",
                    inputType: "select",
                    formRow: "4",
                    formColumn: "1",
                    formCss: "is-one-third",
                    tableColumn: "9",
                    options: [
                      {
                        text: "Active"
                      },
                      {
                        text: "In progress"
                      },
                      {
                        text: "Complete"
                      }
                    ],
                    dataParent: "carePlan.table2",
                    fqn: "carePlan.table2.status",
                    tableKey: "table2"
                  }
                ]
              }
            ],
            columnsCount: 4
          }
        }
      ],
      pageData: {
        table2: []
      }
    },
    consultants: {
      pageTitle: "Consults",
      pageDataKey: "consultants",
      pageChildren: [],
      generated: "2019-04-10T11:07:18-07:00",
      hasForm: true,
      page_form: {
        rows: [],
        columnsCount: 0
      },
      pageData: {}
    },
    labResults: {
      pageTitle: "Laboratory results",
      pageDataKey: "labResults",
      pageChildren: [
        {
          label: "ABG laboratory report",
          elementKey: "labReport1_1",
          fqn: "labResults.labReport.labReport1_1"
        },
        {
          label: "ABG laboratory report",
          elementKey: "labReport2_1",
          fqn: "labResults.labReport.labReport2_1"
        },
        {
          label: "C&S laboratory report",
          elementKey: "labReport3_1",
          fqn: "labResults.labReport.labReport3_1"
        },
        {
          label: "Final C&S laboratory report",
          elementKey: "labReport4_1",
          fqn: "labResults.labReport.labReport4_1"
        }
      ],
      generated: "2019-04-10T11:07:18-07:00",
      hasForm: true,
      page_form: {
        rows: [
          {
            formRow: "1",
            elements: [
              {
                label: "Laboratory results",
                pageDataKey: "labResults",
                elementKey: "labReport",
                inputType: "fieldset",
                formRow: "1",
                formColumn: "1",
                formCss: "h2",
                dataParent: "labResults",
                fqn: "labResults.labReport",
                elements: [
                  {
                    label: "ABG laboratory report",
                    pageDataKey: "labResults",
                    level3Key: "labReport",
                    elementKey: "labReport1_1",
                    inputType: "assetLink",
                    fsetRow: "1",
                    fsetCol: "1",
                    assetBase: "Lab reports",
                    assetName: "Day 0 ABG Laboratory Report.pdf",
                    dataParent: "labResults.labReport",
                    fqn: "labResults.labReport.labReport1_1",
                    formColumn: "1"
                  },
                  {
                    label: "ABG laboratory report",
                    pageDataKey: "labResults",
                    level3Key: "labReport",
                    elementKey: "labReport2_1",
                    inputType: "assetLink",
                    fsetRow: "2",
                    fsetCol: "1",
                    assetBase: "Lab reports",
                    assetName: "Day 1 ABG Laboratory Report.pdf",
                    dataParent: "labResults.labReport",
                    fqn: "labResults.labReport.labReport2_1",
                    formColumn: "1"
                  },
                  {
                    label: "C&S laboratory report",
                    pageDataKey: "labResults",
                    level3Key: "labReport",
                    elementKey: "labReport3_1",
                    inputType: "assetLink",
                    fsetRow: "3",
                    fsetCol: "1",
                    assetBase: "Lab reports",
                    assetName: "Day 3 C&S  Laboratory Report.pdf",
                    dataParent: "labResults.labReport",
                    fqn: "labResults.labReport.labReport3_1",
                    formColumn: "1"
                  },
                  {
                    label: "Final C&S laboratory report",
                    pageDataKey: "labResults",
                    level3Key: "labReport",
                    elementKey: "labReport4_1",
                    inputType: "assetLink",
                    fsetRow: "4",
                    fsetCol: "1",
                    assetBase: "Lab reports",
                    assetName: "Day 3 Final C&S Laboratory Report.pdf",
                    dataParent: "labResults.labReport",
                    fqn: "labResults.labReport.labReport4_1",
                    formColumn: "1"
                  }
                ],
                containerType: "fieldset",
                containerKey: "labReport",
                formFieldSet: {
                  rows: [
                    {
                      formRow: "1",
                      elements: [
                        {
                          label: "ABG laboratory report",
                          pageDataKey: "labResults",
                          level3Key: "labReport",
                          elementKey: "labReport1_1",
                          inputType: "assetLink",
                          fsetRow: "1",
                          fsetCol: "1",
                          assetBase: "Lab reports",
                          assetName: "Day 0 ABG Laboratory Report.pdf",
                          dataParent: "labResults.labReport",
                          fqn: "labResults.labReport.labReport1_1",
                          formColumn: "1"
                        }
                      ]
                    },
                    {
                      formRow: "2",
                      elements: [
                        {
                          label: "ABG laboratory report",
                          pageDataKey: "labResults",
                          level3Key: "labReport",
                          elementKey: "labReport2_1",
                          inputType: "assetLink",
                          fsetRow: "2",
                          fsetCol: "1",
                          assetBase: "Lab reports",
                          assetName: "Day 1 ABG Laboratory Report.pdf",
                          dataParent: "labResults.labReport",
                          fqn: "labResults.labReport.labReport2_1",
                          formColumn: "1"
                        }
                      ]
                    },
                    {
                      formRow: "3",
                      elements: [
                        {
                          label: "C&S laboratory report",
                          pageDataKey: "labResults",
                          level3Key: "labReport",
                          elementKey: "labReport3_1",
                          inputType: "assetLink",
                          fsetRow: "3",
                          fsetCol: "1",
                          assetBase: "Lab reports",
                          assetName: "Day 3 C&S  Laboratory Report.pdf",
                          dataParent: "labResults.labReport",
                          fqn: "labResults.labReport.labReport3_1",
                          formColumn: "1"
                        }
                      ]
                    },
                    {
                      formRow: "4",
                      elements: [
                        {
                          label: "Final C&S laboratory report",
                          pageDataKey: "labResults",
                          level3Key: "labReport",
                          elementKey: "labReport4_1",
                          inputType: "assetLink",
                          fsetRow: "4",
                          fsetCol: "1",
                          assetBase: "Lab reports",
                          assetName: "Day 3 Final C&S Laboratory Report.pdf",
                          dataParent: "labResults.labReport",
                          fqn: "labResults.labReport.labReport4_1",
                          formColumn: "1"
                        }
                      ]
                    }
                  ],
                  columnsCount: 1
                }
              }
            ]
          }
        ],
        columnsCount: 1
      },
      pageData: {}
    },
    medicalImaging: {
      pageTitle: "Medical imaging",
      pageDataKey: "medicalImaging",
      pageChildren: [
        {
          label: "Day 0 - COPD xray",
          elementKey: "diagnosticReport1_1",
          fqn: "medicalImaging.diagnosticReport.diagnosticReport1_1"
        },
        {
          label: "Day 2 - Pneumonia xray",
          elementKey: "diagnosticReport2_1",
          fqn: "medicalImaging.diagnosticReport.diagnosticReport2_1"
        },
        {
          label: "COPD report",
          elementKey: "diagnosticImage1_2",
          fqn: "medicalImaging.diagnosticImage.diagnosticImage1_2"
        },
        {
          label: "Pneumonia report",
          elementKey: "diagnosticImage2_2",
          fqn: "medicalImaging.diagnosticImage.diagnosticImage2_2"
        }
      ],
      generated: "2019-04-10T11:07:18-07:00",
      hasForm: true,
      page_form: {
        rows: [
          {
            formRow: "1",
            elements: [
              {
                label: "Medical imaging",
                pageDataKey: "medicalImaging",
                elementKey: "diagnosticReport",
                inputType: "fieldset",
                formRow: "1",
                formColumn: "1",
                dataParent: "medicalImaging",
                fqn: "medicalImaging.diagnosticReport",
                elements: [
                  {
                    label: "Day 0 - COPD xray",
                    pageDataKey: "medicalImaging",
                    level3Key: "diagnosticReport",
                    elementKey: "diagnosticReport1_1",
                    inputType: "assetLink",
                    fsetRow: "1",
                    fsetCol: "1",
                    assetBase: "Diagnostic test results",
                    assetName: "Xray report for COPD day 0.pdf",
                    dataParent: "medicalImaging.diagnosticReport",
                    fqn: "medicalImaging.diagnosticReport.diagnosticReport1_1",
                    formColumn: "1"
                  },
                  {
                    label: "Day 2 - Pneumonia xray",
                    pageDataKey: "medicalImaging",
                    level3Key: "diagnosticReport",
                    elementKey: "diagnosticReport2_1",
                    inputType: "assetLink",
                    fsetRow: "2",
                    fsetCol: "1",
                    assetBase: "Diagnostic test results",
                    assetName: "Xray report for Pneumonia day 2.pdf",
                    dataParent: "medicalImaging.diagnosticReport",
                    fqn: "medicalImaging.diagnosticReport.diagnosticReport2_1",
                    formColumn: "1"
                  }
                ],
                containerType: "fieldset",
                containerKey: "diagnosticReport",
                formFieldSet: {
                  rows: [
                    {
                      formRow: "1",
                      elements: [
                        {
                          label: "Day 0 - COPD xray",
                          pageDataKey: "medicalImaging",
                          level3Key: "diagnosticReport",
                          elementKey: "diagnosticReport1_1",
                          inputType: "assetLink",
                          fsetRow: "1",
                          fsetCol: "1",
                          assetBase: "Diagnostic test results",
                          assetName: "Xray report for COPD day 0.pdf",
                          dataParent: "medicalImaging.diagnosticReport",
                          fqn: "medicalImaging.diagnosticReport.diagnosticReport1_1",
                          formColumn: "1"
                        }
                      ]
                    },
                    {
                      formRow: "2",
                      elements: [
                        {
                          label: "Day 2 - Pneumonia xray",
                          pageDataKey: "medicalImaging",
                          level3Key: "diagnosticReport",
                          elementKey: "diagnosticReport2_1",
                          inputType: "assetLink",
                          fsetRow: "2",
                          fsetCol: "1",
                          assetBase: "Diagnostic test results",
                          assetName: "Xray report for Pneumonia day 2.pdf",
                          dataParent: "medicalImaging.diagnosticReport",
                          fqn: "medicalImaging.diagnosticReport.diagnosticReport2_1",
                          formColumn: "1"
                        }
                      ]
                    }
                  ],
                  columnsCount: 1
                }
              }
            ]
          }
        ],
        columnsCount: 1
      },
      pageData: {}
    },
    operationReports: {
      pageTitle: "Operative reports and anaesthesia record",
      pageDataKey: "operationReports",
      pageChildren: [],
      generated: "2019-04-10T11:07:18-07:00",
      hasForm: true,
      page_form: {
        rows: [],
        columnsCount: 0
      },
      pageData: {}
    }
  }
}