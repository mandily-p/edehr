export default function () {
  return {
    assessmentTools: {
      pageDataKey: 'assessmentTools',
      pageTitle: 'Standardized assessment tools',
      pIndex: '35',
      isV2: true,
      hasGridForm: true,
      pageChildren: [
        {
          elementKey: 'admissions1_1',
          assetBase: 'standardized-assessment-tools',
          assetName: 'the-canadian-ed-triage-and-acuity-scale.gif',
          formIndex: '1',
          inputType: 'assetLink',
          label: 'Triage scale',
          fqn: 'assessmentTools.admissions1_1'
        },
        {
          elementKey: 'admissions2_1',
          assetBase: 'standardized-assessment-tools',
          assetName: 'patient-health-questionnaire.pdf',
          formIndex: '1',
          inputType: 'assetLink',
          label: 'Patient health questionaire',
          fqn: 'assessmentTools.admissions2_1'
        },
        {
          elementKey: 'admissions3_1',
          assetBase: 'standardized-assessment-tools',
          assetName: 'audit.pdf',
          formIndex: '1',
          inputType: 'assetLink',
          label: 'Alcohol consumption',
          fqn: 'assessmentTools.admissions3_1'
        },
        {
          elementKey: 'painAssessment1_1',
          assetBase: 'standardized-assessment-tools',
          assetName: 'opqrstuv.pdf',
          formIndex: '1',
          inputType: 'assetLink',
          label: 'OPQRSTUV',
          fqn: 'assessmentTools.painAssessment1_1'
        },
        {
          elementKey: 'painAssessment2_1',
          assetBase: 'standardized-assessment-tools',
          assetName: 'numeric-rating-scale.pdf',
          formIndex: '1',
          inputType: 'assetLink',
          label: '0-10 numeric rating scale',
          fqn: 'assessmentTools.painAssessment2_1'
        },
        {
          elementKey: 'neuroAssessment1_1',
          assetBase: 'standardized-assessment-tools',
          assetName: 'glasgow-coma-scale.pdf',
          formIndex: '1',
          inputType: 'assetLink',
          label: 'Glasgow coma scale',
          fqn: 'assessmentTools.neuroAssessment1_1'
        },
        {
          elementKey: 'neuroAssessment2_1',
          assetBase: 'standardized-assessment-tools',
          assetName: 'mini-mental-health-screen.pdf',
          formIndex: '1',
          inputType: 'assetLink',
          label: 'Mini mental state examination',
          fqn: 'assessmentTools.neuroAssessment2_1'
        },
        {
          elementKey: 'neuroAssessment3_1',
          assetBase: 'standardized-assessment-tools',
          assetName: 'richmond-agitation-sedation-scale-rass.pdf',
          formIndex: '1',
          inputType: 'assetLink',
          label: 'Richmond agitation scale',
          fqn: 'assessmentTools.neuroAssessment3_1'
        },
        {
          elementKey: 'fallRisk1_1',
          assetBase: 'standardized-assessment-tools',
          assetName: 'fall-risk-assessment-tool.pdf',
          formIndex: '1',
          inputType: 'assetLink',
          label: 'Fall assessment',
          fqn: 'assessmentTools.fallRisk1_1'
        },
        {
          elementKey: 'fallRisk2_1',
          assetBase: 'standardized-assessment-tools',
          assetName: 'risk-for-falls.png',
          formIndex: '1',
          inputType: 'assetLink',
          label: 'Risk for falls',
          fqn: 'assessmentTools.fallRisk2_1'
        },
        {
          elementKey: 'notes1_1',
          assetBase: 'standardized-assessment-tools',
          assetName: 'consultation-form.pdf',
          formIndex: '1',
          inputType: 'assetLink',
          label: 'Consult and referral note template',
          fqn: 'assessmentTools.notes1_1'
        },
        {
          elementKey: 'educational1_1',
          assetBase: 'standardized-assessment-tools',
          assetName: 'copd-assessment-test.pdf',
          formIndex: '1',
          inputType: 'assetLink',
          label: 'COPD assessment',
          fqn: 'assessmentTools.educational1_1'
        },
        {
          elementKey: 'educational2_1',
          assetBase: 'standardized-assessment-tools',
          assetName: 'bristol-stool-chart.pdf',
          formIndex: '1',
          inputType: 'assetLink',
          label: 'Bristol stool chart',
          fqn: 'assessmentTools.educational2_1'
        },
        {
          elementKey: 'wound1_1',
          assetBase: 'standardized-assessment-tools',
          assetName: 'braden-scale.pdf',
          formIndex: '1',
          inputType: 'assetLink',
          label: 'Braden scale',
          fqn: 'assessmentTools.wound1_1'
        },
        {
          elementKey: 'medication1_1',
          assetBase: 'standardized-assessment-tools',
          assetName: 'best_possible_medication.pdf',
          formIndex: '1',
          inputType: 'assetLink',
          label: 'Best possible medication history',
          fqn: 'assessmentTools.medication1_1'
        }
      ],
      generated: '2019-09-02T05:58:16-07:00',
      pageElements: {
        page_form132: {
          elementKey: 'page_form132',
          formKey: 'page_form132',
          isPageForm: true,
          ehr_groups: [
            {
              gIndex: '1',
              gChildren: [
                {
                  label: 'Admissions',
                  elementKey: 'subgroup141',
                  sgChildren: [
                    'admissions1_1',
                    'admissions2_1',
                    'admissions3_1'
                  ]
                },
                {
                  label: 'Pain assessment',
                  elementKey: 'subgroup142',
                  sgChildren: [
                    'painAssessment1_1',
                    'painAssessment2_1'
                  ]
                },
                {
                  label: 'Neurological assessment',
                  elementKey: 'subgroup143',
                  sgChildren: [
                    'neuroAssessment1_1',
                    'neuroAssessment2_1',
                    'neuroAssessment3_1'
                  ]
                },
                {
                  label: 'Falls risk',
                  elementKey: 'subgroup144',
                  sgChildren: [
                    'fallRisk1_1',
                    'fallRisk2_1'
                  ]
                },
                {
                  label: 'Notes',
                  elementKey: 'subgroup145',
                  sgChildren: [
                    'notes1_1'
                  ]
                },
                {
                  label: 'Educational resources',
                  elementKey: 'subgroup146',
                  sgChildren: [
                    'educational1_1',
                    'educational2_1'
                  ]
                },
                {
                  label: 'Wound assessment',
                  elementKey: 'subgroup147',
                  sgChildren: [
                    'wound1_1'
                  ]
                },
                {
                  label: 'Medication',
                  elementKey: 'subgroup148',
                  sgChildren: [
                    'medication1_1'
                  ]
                }
              ]
            }
          ]
        }
      }
    },
    codeLookup: {
      pageDataKey: 'codeLookup',
      pageTitle: 'Code lookup',
      pIndex: '36',
      isV2: true,
      hasGridForm: true,
      pageChildren: [
        {
          elementKey: 'snomed',
          formIndex: '1',
          inputType: 'text',
          label: 'SnomedCT',
          fqn: 'codeLookup.snomed'
        },
        {
          elementKey: 'icf',
          formIndex: '1',
          inputType: 'text',
          label: 'ICB',
          fqn: 'codeLookup.icf'
        }
      ],
      generated: '2019-09-02T05:58:16-07:00',
      pageElements: {
        aForm: {
          elementKey: 'aForm',
          formKey: 'aForm',
          isPageForm: true,
          ehr_groups: [
            {
              gIndex: '1',
              gChildren: [
                'snomed',
                'icf'
              ]
            }
          ]
        }
      }
    },
    diagnosticCodes: {
      pageDataKey: 'diagnosticCodes',
      pageTitle: 'Diagnostic codes (ICD-10)',
      pIndex: '37',
      isV2: true,
      hasGridTable: true,
      pageChildren: [
        {
          elementKey: 'name',
          formIndex: '1',
          inputType: 'text',
          label: 'Name',
          tableColumn: '1',
          tableLabel: 'Header',
          fqn: 'diagnosticCodes.name'
        },
        {
          elementKey: 'profession',
          formIndex: '1',
          inputType: 'text',
          label: 'Profession',
          tableColumn: '1',
          fqn: 'diagnosticCodes.profession'
        },
        {
          elementKey: 'day',
          formIndex: '1',
          inputType: 'day',
          label: 'Day',
          tableColumn: '1',
          fqn: 'diagnosticCodes.day'
        },
        {
          elementKey: 'time',
          formIndex: '1',
          inputType: 'time',
          label: 'Time',
          tableColumn: '1',
          fqn: 'diagnosticCodes.time'
        },
        {
          elementKey: 'icd10',
          assetBase: 'static-databases',
          assetName: 'icd-10-medical-diagnosis-codes.pdf',
          formIndex: '1',
          inputType: 'text',
          label: '<a href=\'/assets/static-databases/icd-10-medical-diagnosis-codes.pdf\' target=\'_blank\'>ICD-10 database</a>',
          fqn: 'diagnosticCodes.icd10'
        },
        {
          elementKey: 'condition',
          dataCaseStudy: 'COPD-NL-History of smoking-NL-Hypertension',
          formIndex: '1',
          inputType: 'text',
          label: 'Condition',
          mandatory: 'yes',
          fqn: 'diagnosticCodes.condition'
        },
        {
          elementKey: 'code',
          dataCaseStudy: 'J44.9-NL-Z86.42-NL-I10',
          formIndex: '1',
          inputType: 'text',
          label: 'Diagnosis code',
          mandatory: 'yes',
          validation: 'Up to 8 characters long',
          fqn: 'diagnosticCodes.code'
        },
        {
          elementKey: 'type',
          dataCaseStudy: 'M-NL-3-NL-3',
          formIndex: '1',
          inputType: 'select',
          label: 'Diagnosis type',
          mandatory: 'yes',
          options: [
            {
              text: 'M'
            },
            {
              text: '1'
            },
            {
              text: '2'
            },
            {
              text: '3'
            }
          ],
          validation: '1 character',
          fqn: 'diagnosticCodes.type'
        },
        {
          elementKey: 'prefix',
          formIndex: '1',
          inputType: 'text',
          label: 'Prefix',
          mandatory: 'no',
          validation: '1 character',
          fqn: 'diagnosticCodes.prefix'
        },
        {
          elementKey: 'cluster',
          formIndex: '1',
          inputType: 'text',
          label: 'Diagnosis cluster',
          mandatory: 'no',
          validation: '1 character',
          fqn: 'diagnosticCodes.cluster'
        }
      ],
      generated: '2019-09-02T05:58:16-07:00',
      pageElements: {
        table: {
          elementKey: 'table',
          tableKey: 'table',
          isTable: true,
          addButtonText: 'Add a diagnostic code',
          ehr_list: [
            {
              label: 'Header',
              ehr_list_index: '1',
              items: [
                'name',
                'profession',
                'day',
                'time'
              ]
            }
          ],
          form: {
            elementKey: 'table',
            addButtonText: 'Add a diagnostic code',
            formKey: 'table',
            ehr_groups: [
              {
                formCss: 'record-header',
                gIndex: '1',
                gChildren: [
                  'name',
                  'profession',
                  'day',
                  'time'
                ]
              },
              {
                gIndex: '2',
                gChildren: [
                  'icd10',
                  'condition',
                  'code',
                  'type',
                  'prefix',
                  'cluster'
                ]
              }
            ],
            ehr_data: {
              name: '',
              profession: '',
              day: '',
              time: '',
              icd10: '',
              condition: '',
              code: '',
              type: '',
              prefix: '',
              cluster: ''
            }
          }
        }
      }
    },
    interventionCodes: {
      pageDataKey: 'interventionCodes',
      pageTitle: 'Intervention codes',
      pIndex: '38',
      isV2: true,
      hasGridTable: true,
      pageChildren: [
        {
          elementKey: 'name',
          formIndex: '1',
          inputType: 'text',
          label: 'Name',
          tableColumn: '1',
          tableLabel: 'Header',
          fqn: 'interventionCodes.name'
        },
        {
          elementKey: 'profession',
          formIndex: '1',
          inputType: 'text',
          label: 'Profession',
          tableColumn: '1',
          fqn: 'interventionCodes.profession'
        },
        {
          elementKey: 'day',
          formIndex: '1',
          inputType: 'day',
          label: 'Day',
          tableColumn: '1',
          fqn: 'interventionCodes.day'
        },
        {
          elementKey: 'time',
          formIndex: '1',
          inputType: 'time',
          label: 'Time',
          tableColumn: '1',
          fqn: 'interventionCodes.time'
        },
        {
          elementKey: 'spacer',
          assetBase: '?',
          formIndex: '1',
          inputType: 'spacer',
          fqn: 'interventionCodes.spacer'
        },
        {
          elementKey: 'label',
          formIndex: '1',
          inputType: 'form_label',
          label: 'Intervention code attributes',
          fqn: 'interventionCodes.label'
        },
        {
          elementKey: 'intervention',
          dataCaseStudy: '3.GY.10.VA-NL-2.GZ.21.EA',
          formIndex: '1',
          formOption: 'bold-text',
          inputType: 'text',
          label: 'Intervention',
          fqn: 'interventionCodes.intervention'
        },
        {
          elementKey: 'status',
          formIndex: '1',
          inputType: 'text',
          label: 'Status',
          fqn: 'interventionCodes.status'
        },
        {
          elementKey: 'laterally',
          formIndex: '1',
          inputType: 'text',
          label: 'Laterally',
          fqn: 'interventionCodes.laterally'
        },
        {
          elementKey: 'extent',
          formIndex: '1',
          inputType: 'text',
          label: 'Extent',
          fqn: 'interventionCodes.extent'
        }
      ],
      generated: '2019-09-02T05:58:16-07:00',
      pageElements: {
        table: {
          elementKey: 'table',
          tableKey: 'table',
          isTable: true,
          addButtonText: 'Add an intervention code',
          ehr_list: [
            {
              label: 'Header',
              ehr_list_index: '1',
              items: [
                'name',
                'profession',
                'day',
                'time'
              ]
            }
          ],
          form: {
            elementKey: 'table',
            addButtonText: 'Add an intervention code',
            formKey: 'table',
            ehr_groups: [
              {
                formCss: 'record-header',
                gIndex: '1',
                gChildren: [
                  'name',
                  'profession',
                  'day',
                  'time'
                ]
              },
              {
                gIndex: '2',
                gChildren: [
                  'spacer',
                  'label',
                  'intervention',
                  'status',
                  'laterally',
                  'extent'
                ]
              }
            ],
            ehr_data: {
              name: '',
              profession: '',
              day: '',
              time: '',
              intervention: '',
              status: '',
              laterally: '',
              extent: ''
            }
          }
        }
      }
    },
    caseMixGroup: {
      pageDataKey: 'caseMixGroup',
      pageTitle: 'Case mix group',
      pIndex: '39',
      isV2: true,
      hasGridTable: true,
      pageChildren: [
        {
          elementKey: 'name',
          formIndex: '1',
          inputType: 'text',
          label: 'Name',
          tableColumn: '1',
          tableLabel: 'Header',
          fqn: 'caseMixGroup.name'
        },
        {
          elementKey: 'profession',
          formIndex: '1',
          inputType: 'text',
          label: 'Profession',
          tableColumn: '1',
          fqn: 'caseMixGroup.profession'
        },
        {
          elementKey: 'day',
          formIndex: '1',
          inputType: 'day',
          label: 'Day',
          tableColumn: '1',
          fqn: 'caseMixGroup.day'
        },
        {
          elementKey: 'time',
          formIndex: '1',
          inputType: 'time',
          label: 'Time',
          tableColumn: '1',
          fqn: 'caseMixGroup.time'
        },
        {
          elementKey: 'clinicalCategory',
          formIndex: '1',
          inputType: 'text',
          label: 'Major clinical category',
          fqn: 'caseMixGroup.clinicalCategory'
        },
        {
          elementKey: 'caseMixNumber',
          formIndex: '1',
          inputType: 'text',
          label: 'Case mix number',
          fqn: 'caseMixGroup.caseMixNumber'
        },
        {
          elementKey: 'resourceIntensity',
          formIndex: '1',
          inputType: 'text',
          label: 'Resource intensity weight',
          fqn: 'caseMixGroup.resourceIntensity'
        },
        {
          elementKey: 'expectedStay',
          formIndex: '1',
          inputType: 'text',
          label: 'Expected length of stay',
          fqn: 'caseMixGroup.expectedStay'
        },
        {
          elementKey: 'analysis',
          formIndex: '1',
          inputType: 'textarea',
          label: 'Analysis',
          fqn: 'caseMixGroup.analysis'
        }
      ],
      generated: '2019-09-02T05:58:16-07:00',
      pageElements: {
        table: {
          elementKey: 'table',
          tableKey: 'table',
          isTable: true,
          addButtonText: 'Add a case mix group',
          ehr_list: [
            {
              label: 'Header',
              ehr_list_index: '1',
              items: [
                'name',
                'profession',
                'day',
                'time'
              ]
            }
          ],
          form: {
            elementKey: 'table',
            addButtonText: 'Add a case mix group',
            formKey: 'table',
            ehr_groups: [
              {
                formCss: 'record-header',
                gIndex: '1',
                gChildren: [
                  'name',
                  'profession',
                  'day',
                  'time'
                ]
              },
              {
                gIndex: '2',
                gChildren: [
                  'clinicalCategory',
                  'caseMixNumber',
                  'resourceIntensity',
                  'expectedStay',
                  'analysis'
                ]
              }
            ],
            ehr_data: {
              name: '',
              profession: '',
              day: '',
              time: '',
              clinicalCategory: '',
              caseMixNumber: '',
              resourceIntensity: '',
              expectedStay: '',
              analysis: ''
            }
          }
        }
      }
    }
  }
}