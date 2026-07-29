export const rocketParts = {

    nose:{

        id:"nose",

        name:"Nose Cone",

        height:60,

        mass:120,

        fuel:0,

        thrust:0,

        cost:4500,

        svg:`
        <polygon
            points="70,0 95,60 45,60"
            fill="#f3f7ff"/>
        `
    },

    tank:{

        id:"tank",

        name:"Fuel Tank",

        height:120,

        mass:350,

        fuel:450,

        thrust:0,

        cost:8500,

        svg:`
        <rect
            x="45"
            y="0"
            width="50"
            height="120"
            rx="20"
            fill="#dfe6ef"/>
        `
    },

    engine:{

        id:"engine",

        name:"Engine",

        height:55,

        mass:210,

        fuel:0,

        thrust:950,

        cost:15000,

        svg:`
        <rect
            x="50"
            y="0"
            width="40"
            height="50"
            rx="8"
            fill="#5a6779"/>
        `
    },

    fins:{

        id:"fins",

        name:"Fins",

        height:20,

        mass:40,

        fuel:0,

        thrust:0,

        cost:1800,

        svg:`
        <polygon
            points="45,0 20,25 45,20"
            fill="#8da1bd"/>

        <polygon
            points="95,0 120,25 95,20"
            fill="#8da1bd"/>
        `
    }

};
