let grantObj = {
    grant_id: 1001,
    name: 'Working Family Allowance',
    description: 'Support for working households in need of additional financial support.',
    eligibility_requirements: [{
            req_id: 2001,
            name: 'Hong Kong Residency',
            question: 'Have you been an HKID cardholder for more than 12 months?',
            //should we actually put question type 'plain text' or just the id?
            question_type: 101,
            //should we actually put validation type 'binary' or just the id?
            validation_type_id: 14},
        {
            req_id: 2002,
            name: 'monthly working hours',
            question: 'some question here',
            //should we actually put question type 'multiple choice' or just the id?
            question_type: 104,
            //should we actually put validation type 'integer' or just the id?
            validation_type_id: 10}
        }
    ]
    subgrants: [{
        grant_id: 1004,
        name: 'Child allowance',
        description: 'PLACEHOLDER TEXT',
        value: 3000,
            //should we actually put value type 'monthly' or just the id?
            value_type: 'monthly'
        eligibility_requirements: [{
                req_id: 2001,
                name: 'Child in household',
                question: 'Do you have a child/children aged below 15, or aged between 15 and 21 receiving full-time education (but not post-secondary education)?',
                //should we actually put question type 'plain text' or just the id?
                question_type: 101,
                //should we actually put validation type 'binary' or just the id?
                validation_type_id: 14}
        ]},
        {
            grant_id: 2001,
            name: 'Elderly allowance',
            description: 'PLACEHOLDER TEXT',
            value: 1000,
            //should we actually put value type 'monthly' or just the id?
            value_type: 'monthly'
            eligibility_requirements: [{
                    req_id: 2001,
                    name: 'Hong Kong Residency',
                    question: 'Have you been an HKID cardholder for more than 12 months?',
                    //should we actually put question type 'plain text' or just the id?
                    question_type: 101,
                    //should we actually put validation type 'binary' or just the id?
                    validation_type_id: 14},
                {
                    req_id: 2002,
                    name: 'monthly working hours',
                    question: 'some question here',
                    //should we actually put question type 'multiple choice' or just the id?
                    question_type: 104,
                    //should we actually put validation type 'integer' or just the id?
                    validation_type_id: 10}
            ]
        }
    ]


}

