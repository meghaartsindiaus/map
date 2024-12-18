var simplemaps_usmap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    popups: "detect",
    
    //State defaults
    state_description: "State Description",
    state_color: "#fff0dd",
    state_hover_color: "#b5cfe5",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
    //Location defaults
    location_description: "Add location markers using latitude and longitude!",
    location_color: "#6477ce",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_url: "",
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#204894",
    label_hover_color: "#d5ddec",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",
    hide_eastern_labels: "no",
    manual_zoom: "no",
    back_image: "no",
    initial_back: "no",
    initial_zoom: -1,
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "yes",
    images_directory: "/static/lib/simplemaps/map_images/",
    fade_time: 0.1,
    import_labels: "no",
    link_text: "View Website",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {

alabama: {
    name: "Alabama",
    color: "#FFE4C4",
    zoomable: "yes",
    click: () => window.parent.postMessage({ state: "Alabama" }, "*"),
},

alaska: {
    name: "Alaska",
    color: "#FFE4C4",
    zoomable: "yes",
    click: () => window.parent.postMessage({ state: "Alaska" }, "*"),
},

arizona: {
    name: "Arizona",
    color: "#FFE4C4",
    zoomable: "yes",
    click: () => window.parent.postMessage({ state: "Arizona" }, "*"),
},

arkansas: {
    name: "Arkansas",
    color: "#FFE4C4",
    zoomable: "yes",
    click: () => window.parent.postMessage({ state: "Arkansas" }, "*"),
},

california: {
    name: "California",
    color: "#FFE4C4",
    zoomable: "yes",
    click: () => window.parent.postMessage({ state: "California" }, "*"),
},

colorado: {
    name: "Colorado",
    color: "#FFE4C4",
    zoomable: "yes",
    click: () => window.parent.postMessage({ state: "Colorado" }, "*"),
},

connecticut: {
    name: "Connecticut",
    color: "#FFE4C4",
    zoomable: "yes",
    click: () => window.parent.postMessage({ state: "Connecticut" }, "*"),
},

delaware: {
    name: "Delaware",
    color: "#FFE4C4",
    zoomable: "yes",
    click: () => window.parent.postMessage({ state: "Delaware" }, "*"),
},

florida: {
    name: "Florida",
    color: "#FFE4C4",
    zoomable: "yes",
    click: () => window.parent.postMessage({ state: "Florida" }, "*"),
},

georgia: {
    name: "Georgia",
    color: "#FFE4C4",
    zoomable: "yes",
    click: () => window.parent.postMessage({ state: "Georgia" }, "*"),
},

hawaii: {
    name: "Hawaii",
    color: "#FFE4C4",
    zoomable: "yes",
    click: () => window.parent.postMessage({ state: "Hawaii" }, "*"),
},

idaho: {
    name: "Idaho",
    color: "#FFE4C4",
    zoomable: "yes",
    click: () => window.parent.postMessage({ state: "Idaho" }, "*"),
},

illinois: {
    name: "Illinois",
    color: "#FFE4C4",
    zoomable: "yes",
    click: () => window.parent.postMessage({ state: "Illinois" }, "*"),
},

indiana: {
    name: "Indiana",
    color: "#FFE4C4",
    zoomable: "yes",
    click: () => window.parent.postMessage({ state: "Indiana" }, "*"),
},

iowa: {
    name: "Iowa",
    color: "#FFE4C4",
    zoomable: "yes",
    click: () => window.parent.postMessage({ state: "Iowa" }, "*"),
},

kansas: {
    name: "Kansas",
    color: "#FFE4C4",
    zoomable: "yes",
    click: () => window.parent.postMessage({ state: "Kansas" }, "*"),
},

kentucky: {
    name: "Kentucky",
    color: "#FFE4C4",
    zoomable: "yes",
    click: () => window.parent.postMessage({ state: "Kentucky" }, "*"),
},

louisiana: {
    name: "Louisiana",
    color: "#FFE4C4",
    zoomable: "yes",
    click: () => window.parent.postMessage({ state: "Louisiana" }, "*"),
},

maine: {
    name: "Maine",
    color: "#FFE4C4",
    zoomable: "yes",
    click: () => window.parent.postMessage({ state: "Maine" }, "*"),
},

maryland: {
    name: "Maryland",
    color: "#FFE4C4",
    zoomable: "yes",
    click: () => window.parent.postMessage({ state: "Maryland" }, "*"),
},

massachusetts: {
    name: "Massachusetts",
    color: "#FFE4C4",
    zoomable: "yes",
    click: () => window.parent.postMessage({ state: "Massachusetts" }, "*"),
},

michigan: {
    name: "Michigan",
    color: "#FFE4C4",
    zoomable: "yes",
    click: () => window.parent.postMessage({ state: "Michigan" }, "*"),
},

minnesota: {
    name: "Minnesota",
    color: "#FFE4C4",
    zoomable: "yes",
    click: () => window.parent.postMessage({ state: "Minnesota" }, "*"),
},

mississippi: {
    name: "Mississippi",
    color: "#FFE4C4",
    zoomable: "yes",
    click: () => window.parent.postMessage({ state: "Mississippi" }, "*"),
},

missouri: {
    name: "Missouri",
    color: "#FFE4C4",
    zoomable: "yes",
    click: () => window.parent.postMessage({ state: "Missouri" }, "*"),
},

montana: {
    name: "Montana",
    color: "#FFE4C4",
    zoomable: "yes",
    click: () => window.parent.postMessage({ state: "Montana" }, "*"),
},

nebraska: {
    name: "Nebraska",
    color: "#FFE4C4",
    zoomable: "yes",
    click: () => window.parent.postMessage({ state: "Nebraska" }, "*"),
},

nevada: {
    name: "Nevada",
    color: "#FFE4C4",
    zoomable: "yes",
    click: () => window.parent.postMessage({ state: "Nevada" }, "*"),
},

new_hampshire: {
    name: "New Hampshire",
    color: "#FFE4C4",
    zoomable: "yes",
    click: () => window.parent.postMessage({ state: "New Hampshire" }, "*"),
},

new_jersey: {
    name: "New Jersey",
    color: "#FFE4C4",
    zoomable: "yes",
    click: () => window.parent.postMessage({ state: "New Jersey" }, "*"),
},

new_mexico: {
    name: "New Mexico",
    color: "#FFE4C4",
    zoomable: "yes",
    click: () => window.parent.postMessage({ state: "New Mexico" }, "*"),
},

new_york: {
    name: "New York",
    color: "#FFE4C4",
    zoomable: "yes",
    click: () => window.parent.postMessage({ state: "New York" }, "*"),
},

north_carolina: {
    name: "North Carolina",
    color: "#FFE4C4",
    zoomable: "yes",
    click: () => window.parent.postMessage({ state: "North Carolina" }, "*"),
},

north_dakota: {
    name: "North Dakota",
    color: "#FFE4C4",
    zoomable: "yes",
    click: () => window.parent.postMessage({ state: "North Dakota" }, "*"),
},

ohio: {
    name: "Ohio",
    color: "#FFE4C4",
    zoomable: "yes",
    click: () => window.parent.postMessage({ state: "Ohio" }, "*"),
},

oklahoma: {
    name: "Oklahoma",
    color: "#FFE4C4",
    zoomable: "yes",
    click: () => window.parent.postMessage({ state: "Oklahoma" }, "*"),
},

oregon: {
    name: "Oregon",
    color: "#FFE4C4",
    zoomable: "yes",
    click: () => window.parent.postMessage({ state: "Oregon" }, "*"),
},

pennsylvania: {
    name: "Pennsylvania",
    color: "#FFE4C4",
    zoomable: "yes",
    click: () => window.parent.postMessage({ state: "Pennsylvania" }, "*"),
},

rhode_island: {
    name: "Rhode Island",
    color: "#FFE4C4",
    zoomable: "yes",
    click: () => window.parent.postMessage({ state: "Rhode Island" }, "*"),
},

south_carolina: {
    name: "South Carolina",
    color: "#FFE4C4",
    zoomable: "yes",
    click: () => window.parent.postMessage({ state: "South Carolina" }, "*"),
},

south_dakota: {
    name: "South Dakota",
    color: "#FFE4C4",
    zoomable: "yes",
    click: () => window.parent.postMessage({ state: "South Dakota" }, "*"),
},

tennessee: {
    name: "Tennessee",
    color: "#FFE4C4",
    zoomable: "yes",
    click: () => window.parent.postMessage({ state: "Tennessee" }, "*"),
},

texas: {
    name: "Texas",
    color: "#FFE4C4",
    zoomable: "yes",
    click: () => window.parent.postMessage({ state: "Texas" }, "*"),
},

utah: {
    name: "Utah",
    color: "#FFE4C4",
    zoomable: "yes",
    click: () => window.parent.postMessage({ state: "Utah" }, "*"),
},

vermont: {
    name: "Vermont",
    color: "#FFE4C4",
    zoomable: "yes",
    click: () => window.parent.postMessage({ state: "Vermont" }, "*"),
},

virginia: {
    name: "Virginia",
    color: "#FFE4C4",
    zoomable: "yes",
    click: () => window.parent.postMessage({ state: "Virginia" }, "*"),
},

washington: {
    name: "Washington",
    color: "#FFE4C4",
    zoomable: "yes",
    click: () => window.parent.postMessage({ state: "Washington" }, "*"),
},

west_virginia: {
    name: "West Virginia",
    color: "#FFE4C4",
    zoomable: "yes",
    click: () => window.parent.postMessage({ state: "West Virginia" }, "*"),
},

wisconsin: {
    name: "Wisconsin",
    color: "#FFE4C4",
    zoomable: "yes",
    click: () => window.parent.postMessage({ state: "Wisconsin" }, "*"),
},

wyoming: {
    name: "Wyoming",
    color: "#FFE4C4",
    zoomable: "yes",
    click: () => window.parent.postMessage({ state: "Wyoming" }, "*"),
},
    HI: {
      name: "Hawaii"
    },
    AK: {
      name: "Alaska"
    },
    FL: {
      name: "Florida"
    },
    NH: {
      name: "New Hampshire"
    },
    VT: {
      name: "Vermont"
    },
    ME: {
      name: "Maine"
    },
    RI: {
      name: "Rhode Island"
    },
    NY: {
      name: "New York"
    },
    PA: {
      name: "Pennsylvania"
    },
    NJ: {
      name: "New Jersey"
    },
    DE: {
      name: "Delaware"
    },
    MD: {
      name: "Maryland"
    },
    VA: {
      name: "Virginia"
    },
    WV: {
      name: "West Virginia"
    },
    OH: {
      name: "Ohio"
    },
    IN: {
      name: "Indiana"
    },
    IL: {
      name: "Illinois"
    },
    CT: {
      name: "Connecticut"
    },
    WI: {
      name: "Wisconsin"
    },
    NC: {
      name: "North Carolina"
    },
    DC: {
      name: "District of Columbia"
    },
    MA: {
      name: "Massachusetts"
    },
    TN: {
      name: "Tennessee"
    },
    AR: {
      name: "Arkansas"
    },
    MO: {
      name: "Missouri"
    },
    GA: {
      name: "Georgia"
    },
    SC: {
      name: "South Carolina"
    },
    KY: {
      name: "Kentucky"
    },
    AL: {
      name: "Alabama"
    },
    LA: {
      name: "Louisiana"
    },
    MS: {
      name: "Mississippi"
    },
    IA: {
      name: "Iowa"
    },
    MN: {
      name: "Minnesota"
    },
    OK: {
      name: "Oklahoma"
    },
    TX: {
      name: "Texas"
    },
    NM: {
      name: "New Mexico"
    },
    KS: {
      name: "Kansas"
    },
    NE: {
      name: "Nebraska"
    },
    SD: {
      name: "South Dakota"
    },
    ND: {
      name: "North Dakota"
    },
    WY: {
      name: "Wyoming"
    },
    MT: {
      name: "Montana"
    },
    CO: {
      name: "Colorado"
    },
    UT: {
      name: "Utah"
    },
    AZ: {
      name: "Arizona"
    },
    NV: {
      name: "Nevada"
    },
    OR: {
      name: "Oregon"
    },
    WA: {
      name: "Washington"
    },
    CA: {
      name: "California"
    },
    MI: {
      name: "Michigan"
    },
    ID: {
      name: "Idaho"
    },
    GU: {
      name: "Guam",
      hide: "yes"
    },
    VI: {
      name: "Virgin Islands",
      hide: "yes"
    },
    PR: {
      name: "Puerto Rico",
      hide: "yes"
    },
    MP: {
      name: "Northern Mariana Islands",
      hide: "yes"
    },
    AS: {
      name: "American Samoa",
      hide: "yes"
    }
  },
  locations: {
    "0": {
      name: "New York City",
      lat: 40.7143528,
      lng: -74.0059731
    },
    "1": {
      name: "Anchorage",
      lat: 61.2180556,
      lng: -149.9002778
    }
  },
  labels: {
    NH: {
      parent_id: "NH",
      x: "932",
      y: "183",
      pill: "yes",
      width: 45,
      display: "all"
    },
    VT: {
      parent_id: "VT",
      x: "883",
      y: "243",
      pill: "yes",
      width: 45,
      display: "all"
    },
    RI: {
      parent_id: "RI",
      x: "932",
      y: "273",
      pill: "yes",
      width: 45,
      display: "all"
    },
    NJ: {
      parent_id: "NJ",
      x: "883",
      y: "273",
      pill: "yes",
      width: 45,
      display: "all"
    },
    DE: {
      parent_id: "DE",
      x: "883",
      y: "303",
      pill: "yes",
      width: 45,
      display: "all"
    },
    MD: {
      parent_id: "MD",
      x: "932",
      y: "303",
      pill: "yes",
      width: 45,
      display: "all"
    },
    DC: {
      parent_id: "DC",
      x: "884",
      y: "332",
      pill: "yes",
      width: 45,
      display: "all"
    },
    MA: {
      parent_id: "MA",
      x: "932",
      y: "213",
      pill: "yes",
      width: 45,
      display: "all"
    },
    CT: {
      parent_id: "CT",
      x: "932",
      y: "243",
      pill: "yes",
      width: 45,
      display: "all"
    },
    HI: {
      parent_id: "HI",
      x: 305,
      y: 565,
      pill: "yes"
    },
    AK: {
      parent_id: "AK",
      x: "113",
      y: "495"
    },
    FL: {
      parent_id: "FL",
      x: "773",
      y: "510"
    },
    ME: {
      parent_id: "ME",
      x: "893",
      y: "85"
    },
    NY: {
      parent_id: "NY",
      x: "815",
      y: "158"
    },
    PA: {
      parent_id: "PA",
      x: "786",
      y: "210"
    },
    VA: {
      parent_id: "VA",
      x: "790",
      y: "282"
    },
    WV: {
      parent_id: "WV",
      x: "744",
      y: "270"
    },
    OH: {
      parent_id: "OH",
      x: "700",
      y: "240"
    },
    IN: {
      parent_id: "IN",
      x: "650",
      y: "250"
    },
    IL: {
      parent_id: "IL",
      x: "600",
      y: "250"
    },
    WI: {
      parent_id: "WI",
      x: "575",
      y: "155"
    },
    NC: {
      parent_id: "NC",
      x: "784",
      y: "326"
    },
    TN: {
      parent_id: "TN",
      x: "655",
      y: "340"
    },
    AR: {
      parent_id: "AR",
      x: "548",
      y: "368"
    },
    MO: {
      parent_id: "MO",
      x: "548",
      y: "293"
    },
    GA: {
      parent_id: "GA",
      x: "718",
      y: "405"
    },
    SC: {
      parent_id: "SC",
      x: "760",
      y: "371"
    },
    KY: {
      parent_id: "KY",
      x: "680",
      y: "300"
    },
    AL: {
      parent_id: "AL",
      x: "655",
      y: "405"
    },
    LA: {
      parent_id: "LA",
      x: "550",
      y: "435"
    },
    MS: {
      parent_id: "MS",
      x: "600",
      y: "405"
    },
    IA: {
      parent_id: "IA",
      x: "525",
      y: "210"
    },
    MN: {
      parent_id: "MN",
      x: "506",
      y: "124"
    },
    OK: {
      parent_id: "OK",
      x: "460",
      y: "360"
    },
    TX: {
      parent_id: "TX",
      x: "425",
      y: "435"
    },
    NM: {
      parent_id: "NM",
      x: "305",
      y: "365"
    },
    KS: {
      parent_id: "KS",
      x: "445",
      y: "290"
    },
    NE: {
      parent_id: "NE",
      x: "420",
      y: "225"
    },
    SD: {
      parent_id: "SD",
      x: "413",
      y: "160"
    },
    ND: {
      parent_id: "ND",
      x: "416",
      y: "96"
    },
    WY: {
      parent_id: "WY",
      x: "300",
      y: "180"
    },
    MT: {
      parent_id: "MT",
      x: "280",
      y: "95"
    },
    CO: {
      parent_id: "CO",
      x: "320",
      y: "275"
    },
    UT: {
      parent_id: "UT",
      x: "223",
      y: "260"
    },
    AZ: {
      parent_id: "AZ",
      x: "205",
      y: "360"
    },
    NV: {
      parent_id: "NV",
      x: "140",
      y: "235"
    },
    OR: {
      parent_id: "OR",
      x: "100",
      y: "120"
    },
    WA: {
      parent_id: "WA",
      x: "130",
      y: "55"
    },
    ID: {
      parent_id: "ID",
      x: "200",
      y: "150"
    },
    CA: {
      parent_id: "CA",
      x: "79",
      y: "285"
    },
    MI: {
      parent_id: "MI",
      x: "663",
      y: "185"
    },
    PR: {
      parent_id: "PR",
      x: "620",
      y: "545"
    },
    GU: {
      parent_id: "GU",
      x: "550",
      y: "540"
    },
    VI: {
      parent_id: "VI",
      x: "680",
      y: "519"
    },
    MP: {
      parent_id: "MP",
      x: "570",
      y: "575"
    },
    AS: {
      parent_id: "AS",
      x: "665",
      y: "580"
    }
  },
  legend: {
    entries: []
  },
  regions: {}
};
