const operators = [
    {
        id: "mcintyre",
        name: "McIntyre L&R Services",
        tier: "red",
        phone: "980-310-7208",
        address: "None",
        is_ghost: true,
        violations: ["No LLC Registration", "No proper vehicle Identification", "No address provided", "20% credit card fee", "Slow to respond","Utilizes spotter cars"]
    },
    {
        id: "sl-recovery",
        name: "SL Recovery, INC",
        tier: "yellow",
        is_ghost: false,
        phone: "704-889-2608",
        address: "3804 N.Graham St, Charlotte, NC 28206",
        violations: ["Vauge/High rates"]
    },    
        {
        id: "automobile-recovery",
        name: "Automobile Recovery & Parking Enforcement Inc",
        tier: "yellow",
        is_ghost: false,
        phone: "980-395-8460",
        address: "7425 Orr Rd., Charlotte, NC 28213",
        violations: ["Vauge/High rates","20% credit card fee"]
    }, 
            {
        id: "wheel-blockers",
        name: "WheelBlockers Towing & Parking Enforcement Inc",
        tier: "red",
        is_ghost: false,
        phone: "704-606-4166",
        address: "1326 Ashby Rd., Charlotte, NC 28206",
        violations: ["Vauge/High rates","Utilizes Spotters"]
    },             {
        id: "pp-sl",
        name: "Preferred Parking - SL Recovery",
        tier: "green",
        is_ghost: false,
        phone: "704-889-2608",
        address: "3804 N.Graham St, Charlotte, NC 28206",
        violations: []
    }, 
    {
        id: "qc-impound",
        name: "QC Impound",
        tier: "green",
        is_ghost: false,
        phone: "704-699-6330",
        address: "206 Yeoman Rd, Charlotte, NC 28217",
        violations: []
    }, 

    {
        id: "lab-towing",
        name: "Lab Towing & Parking Solutions, LLC",
        tier: "red",
        is_ghost: false,
        phone: "704-925-2012",
        address: null,
        violations: ["No Address on Signage", "25% Credit card fee"]
    },
        {
        id: "lms-towing",
        name: "LMS Parking, LLC",
        tier: "red",
        is_ghost: false,
        phone: "828-263-8326",
        address: null,
        violations: ["No Address on Signage", "25% Credit card fee"]
    },
    {
        id: "clt-towing",
        name: "Charlotte Towing & Recovery",
        tier: "yellow",
        is_ghost: false,
        phone: "704-925-2012",
        address: "3040 Rozelles Ferry Rd., Charlotte, NC 28208",
        violations: ["Vauge/High rates", "10% Credit card fee"]
    },    {
        id: "eastway-wrecker",
        name: "Eastway Wrecker Service",
        tier: "yellow",
        is_ghost: false,
        phone: "704-393-3027",
        address: "2801 Wilkinson Blvd., Charlotte, NC 28208",
        violations: ["Vauge/High rates"]
    },
];

const properties = [
    {
        id: 1,
        business_name: "3510 Dewitt LLC(dissolved)",
        location: "3510 Dewitt Ln",
        coords: [35.194681, -80.875987],
        operator_id: "mcintyre" 
    },
    {
        id: 2,
        business_name: "Prefered Parking - SE",
        location: "2116 Hawkins Rd",
        coords: [35.209541, -80.862451],
        operator_id: "pp-sl"
    },
        {
        id: 3,
        business_name: "Pins Mechanical",
        location: "307 Tremont Ave",
        coords: [35.210736, -80.863917],
        operator_id: "sl-recovery"
    },        {
        id: 4,
        business_name: "Blinders Sport Lounge",
        location: "307 Tremont Ave",
        coords: [35.210683, -80.863056],
        operator_id: "wheel-blockers"
    },
    {
        id: 5,
        business_name: "Heist/Benny Pennello's",
        location: "2909 N. Davidson St.",
        coords: [35.245378, -80.809962],
        operator_id: "sl-recovery"
    },    {
        id: 6,
        business_name: "Brooks Sandwich Shop",
        location: "2718 N. Brevard St",
        coords: [35.245188, -80.811247],
        operator_id: "wheel-blockers"
    },
     {
        id: 6,
        business_name: "Cosmo Apartments",
        location: "3010 Festivus Ct, Charlotte",
        coords: [35.245706, -80.811359],
        operator_id: "wheel-blockers"
    },     {
        id: 7,
        business_name: "Gilde Brewery",
        location: "3530 Dewitt Ln",
        coords: [35.194289, -80.876010],
        operator_id: "qc-impound"
    },
       {
        id: 8,
        business_name: "Beat the Bomb",
        location: "3530 Tryclan",
        coords: [35.194523, -80.877044],
        operator_id: "qc-impound"
    },       {
        id: 9,
        business_name: "Family Dollar",
        location: "3533 Tryclan",
        coords: [35.194765, -80.877516],
        operator_id: "lab-towing"
    },   {
        id: 10,
        business_name: "S. Tryon Townhomes",
        location: "3717 Gleason Wy",
        coords: [35.194572, -80.87773],
        operator_id: "clt-towing"
    },   {
        id: 11,
        business_name: "Ello House",
        location: "3631 Tryclan Dr",
        coords: [35.194019, -80.876937],
        operator_id: "lms-towing"
    },
    //  {
    //     id: 6,
    //     business_name: "Olde Meck Brewing",
    //     location: "2718 N. Brevard St",
    //     coords: [35.24236, -80.811158],
    //     operator_id: "wheel-blockers"
    // },

];