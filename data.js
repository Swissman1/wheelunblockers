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
        id: "legit-clt",
        name: "Legit Park CLT LLC",
        tier: "green",
        is_ghost: false,
        phone: "704-555-0122",
        address: "1234 Enforcement Way, Charlotte, NC 28202",
        violations: []
    },    
    {
        id: "shifty-steve",
        name: "Shifty Steve Recovery LLC",
        tier: "yellow",
        is_ghost: false,
        phone: "704-555-0122",
        address: "1234 College Street, Charlotte, NC 28202",
        violations: ["Vauge/High rates","20% credit card fee"]
    }
];

const properties = [
    {
        id: 1,
        business_name: "Trade & Tryon Lot",
        location: "100 W Trade St",
        coords: [35.2271, -80.8431],
        operator_id: "mcintyre" // Links to the operator above
    },
    {
        id: 2,
        business_name: "South End Station",
        location: "200 E Bland St",
        coords: [35.2130, -80.8560],
        operator_id: "legit-clt"
    },
    {
        id: 3,
        business_name: "The Ghost Deck",
        location: "Uptown North",
        coords: [35.2300, -80.8400],
        operator_id: "mcintyre" // Same operator, different lot
    },    {
        id: 3,
        business_name: "The Ghost Deck",
        location: "Uptown Mid North",
        coords: [35.2307, -80.8450],
        operator_id: "shifty-steve" // Same operator, different lot
    }
];