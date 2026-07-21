// ─────────────────────────────────────────────
// Portfolio Data 
// ─────────────────────────────────────────────

export const profile = {
  name: 'Ayush Srivastava',
  title: 'Data Analyst',
  tagline: 'Microsoft Certified: Power BI Data Analyst Associate',
  avatar: '/avatar.jpg', // Place your photo in /public/avatar.jpg
  aboutShort: {
    headline:
      'I combine engineering logic with data storytelling to turn messy datasets into clear business decisions.',
    points: [
      {
        title: 'Problem-First',
        text: 'Solving actual friction, not just writing code.',
      },
      {
        title: 'End-to-End',
        text: 'Handling everything from raw data to interactive dashboards.',
      },
      {
        title: 'Cloud-Native',
        text: 'Expanding into Google BigQuery and dbt.',
      },
    ],
  },

  aboutDetailed: `From Code to Context

I have a background in Computer Science and Engineering, but I quickly realized that while I enjoy writing code, I enjoy 
even more what happens after the code runs. The most interesting part of technology for me isn't the software itself it's 
discovering the stories hidden inside raw data and turning them into meaningful business decisions. That realization led 
me to focus my career on Business Intelligence and Analytics.

Driven by Curiosity

I learn best by building things that solve problems I genuinely care about. My college project, which won first prize, wasn't 
built to win a competition it started as an attempt to solve my own procrastination problem. More recently, I began building 
an application that converts novels into multi-voice audiobooks simply because I wanted to understand how voice modulation 
works. I approach analytics in exactly the same way: identify friction, understand the root cause, and build a practical solution.

My Current Focus

As an entry-level Data Analyst, I enjoy taking complete ownership of a problem from collecting and cleaning data to analysis, 
dashboard development, stakeholder communication, and final reporting. I am currently strengthening my business acumen while 
expanding into cloud analytics, and I'm looking for opportunities where I can contribute, continue learning, and grow alongside 
an experienced team.`,

  resumeUrl: '/resume.pdf', // Place your resume in /public/resume.pdf
  social: {
    linkedin: 'https://linkedin.com/in/ayush-srivastava-data-analyst/',
    github: 'https://github.com/build-by-Ayush/',
    email: 'ayush.srivastava20704@gmail.com',
    phone: '7483525964',
  },
};

export const toolkit = [
  { name: 'Power BI', logo: '/ToolLogos/powerbi.png', pos: { top: '5%', left: '10%' } },
  { name: 'SQL', logo: '/ToolLogos/sql.png', pos: { top: '5%', right: '10%' } },
  { name: 'Python', logo: '/ToolLogos/python.png', pos: { top: '30%', left: '10%' } },
  { name: 'Excel', logo: '/ToolLogos/excel.png', pos: { top: '30%', right: '11%' } },
  { name: 'Looker Studio', logo: '/ToolLogos/looker.png', pos: { top: '55%', left: '9%' } },
  { name: 'Tableau', logo: '/ToolLogos/tableau.png', pos: { top: '55%', right: '10%' } },
  { name: 'Git', logo: '/ToolLogos/git.png', pos: { top: '80%', right: '35%' } },
];

export const projects = [
  //Project 1
  {
    id: 'ecommerce-funnel',
    title: 'E-Commerce Business Intelligence & Funnel Analytics Platform',
    subtitle:
      'End-to-end customer journey analytics with financial leakage diagnostics',

    thumbnail: '/projects/project1/thumb.png',
    status: "Completed",

    themeColor: '#F97316',

    // Used ONLY on Overview Featured Projects & Project List
    tags: ['Python', 'Streamlit', 'Plotly'],

    // Used in Project Detail page
    tools: [
      'Python (Pandas, Plotly)',
      'Streamlit',
      'GitHub (Automated Sync)',
      'CSV / Excel Data Structures',
    ],

    techniques: [
      'Funnel Drop-off Diagnostics',
      'Relational Data Modeling',
      'Profit Allocation Logic',
      'Rule-Based Alert Engine',
      'ETL Pipeline Simulation',
    ],

    metrics: [
      {
        value: '61.3%',
        unit: 'Drop',
        label: 'CHECKOUT DROP-OFF',
        description:
          'Identified the exact conversion friction point in the customer journey.',
      },
      {
        value: '5',
        unit: "Tables",
        label: 'RELATIONAL SCHEMA',
        description:
          'Modeled events, transactions, returns, and products into a connected ecosystem.',
      },
    ],

    showcase: [
      '/projects/project1/Overview 1.png',
      '/projects/project1/Overview 2.png',
      '/projects/project1/Funnel 1.png',
      '/projects/project1/Funnel 2.png',
    ],

    links: {
      github: 'https://github.com/build-by-Ayush/Intelligent-Business-Analytics-and-Funnel-Optimization-Platform.git',
      liveDemo: 'https://build-by-ayush-intelligent-business-analytics-and-fu-app-ndnyxy.streamlit.app/',
      video: null,
    },

    insights: [
      {
        heading: 'The Business Problem',
        paragraphs: [
          'Standard dashboards only report what was sold. They fail to explain where users dropped off before buying or how much profit leaked through returns after purchase. To solve this, I built a four-layer diagnostic system that tracks the complete customer journey from first visit to post-purchase.',
        ],
      },

      {
        heading: '1. Funnel & Behavioral Diagnostics',
        paragraphs: [
          'I engineered a multi-stage funnel module (Visit → Search → View → Cart → Checkout → Purchase) to locate exact friction points.',
        ],
        bullets: [
          {
            title: 'Drop-Off Tracking',
            description:
              'Programmed logic to identify that 61.3% of users abandon the journey specifically at checkout.',
          },
          {
            title: 'Friction Analysis',
            description:
              'Measured the median time delay between user actions to flag UI hesitation and device-specific conversion issues.',
          },
        ],
      },

      {
        heading: '2. Returns & Financial Leakage',
        paragraphs: [
          'Returns are usually treated as an operations problem; I modeled them as a financial problem.',
        ],
        bullets: [
          {
            title: 'Net Revenue Modeling',
            description:
              'Built metrics for Net Revenue After Returns and Pending Refund Exposure to measure true realized value.',
          },
          {
            title: 'Root Cause Heatmaps',
            description:
              'Correlated return reasons with specific product categories to identify why profit was leaking.',
          },
        ],
      },

      {
        heading: '3. Product Health & Profit Allocation',
        paragraphs: [
          'Raw revenue is misleading when products have high return rates or low margins.',
        ],
        bullets: [
          {
            title: 'Profit Distribution',
            description:
              'Created a mathematical model to distribute order-level profit proportionally to individual products.',
          },
          {
            title: '4-Quadrant Matrix',
            description:
              'Segmented products into Stars, Hidden Gems, Inefficient, and Loss-Making using revenue, profit, and return risk.',
          },
        ],
      },

      {
        heading: '4. Architecture & The Insight Engine',
        paragraphs: [
          'Public datasets rarely contain connected behavioral and transactional layers, so I engineered the complete analytical ecosystem myself.',
        ],
        bullets: [
          {
            title: 'Data Pipeline',
            description:
              'Built a Python engine that generates realistic, connected time-series data across five relational tables.',
          },
          {
            title: 'Automated Sync',
            description:
              'Created a GitHub synchronization workflow that automatically refreshes the deployed Streamlit application whenever monthly data is updated.',
          },
          {
            title: 'Rule-Based Insight Engine',
            description:
              'Developed a rule engine that automatically interprets KPIs and generates plain-language business alerts, transforming the dashboard into an active decision-support platform.',
          },
        ],
      },
    ],
  },
  //Project 2
  {
    id: 'bmtc',
    title: 'BMTC Transit Accessibility & Service Gap Analysis',
    subtitle:
      'Spatial gap analysis identifying transit supply and demand imbalances',

    thumbnail: '/projects/project2/thumb.png',
    status: "Completed",

    themeColor: '#EAB308',

    // Used ONLY on Overview Featured Projects & Project List
    tags: ['Power BI', 'Python', 'SQL'],

    // Used in Project Detail page
    tools: [
      'Power BI (DAX, Data Modeling)',
      'Python',
      'SQL',
      'Power Query',
    ],

    techniques: [
      'Spatial Joins & Route Mapping',
      'Custom DAX Filter Context Logic',
      'Supply and Demand Gap Analysis',
    ],

    metrics: [
      {
        value: '627',
        unit: "Stops",
        label: 'CRITICAL SERVICE GAPS',
        description:
          'Identified specific high-density bus stops suffering from severe supply and demand imbalance',
      },
      {
        value: '50',
        unit: "Meters",
        label: 'SPATIAL BUFFER JOIN',
        description:
          'Applied geospatial logic to physically map 4,655 isolated bus stops to 4,009 transit routes',
      },
    ],

    showcase: [
      '/projects/project2/Stops.png',
      '/projects/project2/Routes 1.png',
      '/projects/project2/Routes 2.png',
    ],

    links: {
      github: 'https://github.com/build-by-Ayush/The-BMTC-Transit-Analysis-Dashboard.git',
      liveDemo: null,
      video: null,
    },

    insights: [
      {
        heading: 'The Business Problem',
        paragraphs: [
          "Bengaluru's rapid urban growth makes transit planning incredibly difficult. I started with a disconnected dataset containing only basic bus stop coordinates, text geometry for routes, and trip counts. There was no relational mapping between stops and routes, and no passenger volume data. To solve this, I built a geospatial intelligence system that answers a critical operational question: Are bus services actually distributed where people live?.",
        ],
      },

      {
        heading: '1. Geospatial Data Engineering',
        paragraphs: [
          'Because the original data lacked relationship keys and demand metrics, I sourced European Union GHSL population data to estimate local transit demand.',
        ],
        bullets: [
          {
            title: 'Spatial Conversion',
            description:
              'Leveraged AI to assist with complex GeoPandas Python syntax, converting raw text geometries into usable spatial objects.',
          },
          {
            title: 'The 50 Meter Buffer Join',
            description:
              'Created a metric buffer around every bus route and performed a spatial join to accurately map 4,655 isolated stops to their respective routes.',
          },
        ],
      },

      {
        heading: '2. Solving the Density Paradox',
        paragraphs: [
          'Initially, summing the population along a route led to massive double counting due to overlapping 1km stop radiuses.',
        ],
        bullets: [
          {
            title: 'The Summing Circles Trap',
            description:
              'Discarded the misleading total population metric that heavily biased physically long routes over actually dense ones.',
          },
          {
            title: 'The Pressure Index',
            description:
              'Engineered a custom metric by dividing the average population along a route by its total daily trips, successfully identifying routes serving massive populations but starved of actual bus frequency.',
          },
        ],
      },

      {
        heading: '3. Power BI Architecture and DAX Logic',
        paragraphs: [
          'I built an interactive routing dashboard but faced a major technical conflict where disconnected map slicers and interactive Top 10 tables would cancel each other out.',
        ],
        bullets: [
          {
            title: 'The Map Bouncer Logic',
            description:
              'Engineered a DAX workaround using the ISFILTERED function to act as a logic gate.',
          },
          {
            title: 'Forced Compliance',
            description:
              'This logic forced the map engine to obey user table clicks without breaking the disconnected slicer functionality.',
          },
        ],
      },

      {
        heading: '4. The Final Impact',
        paragraphs: [
          'This project turned a disconnected pile of GPS coordinates into an enterprise grade transit planning tool.',
        ],
        bullets: [
          {
            title: 'Data Pipeline',
            description:
              'Successfully identified 627 critically underserved bus stops suffering from a severe supply and demand imbalance.',
          },
          {
            title: 'Automated Insight Panel',
            description:
              'Added a DAX driven text generator that automatically reads the Pressure Index and outputs simple text summaries for decision makers.',
          },
        ],
      },
    ],
  },
  //Project 3
  {
    id: 'anomly',
    title: 'Intelligent Anomaly Monitoring System',
    subtitle:
      'Time-series monitoring platform with rule-based diagnostics',

    thumbnail: '/projects/project3/thumb.png',
    status: "Completed",

    themeColor: '#38BDF8',

    // Used ONLY on Overview Featured Projects & Project List
    tags: ['Python', 'Streamlit', 'Time Series'],

    // Used in Project Detail page
    tools: [
      'Python (Pandas, Plotly)',
      'Streamlit',
      'Statistical Analytics',
    ],

    techniques: [
      'Time Series Feature Engineering',
      'Z Score Statistical Analysis',
      'Rule Based Classification',
      'Explainable Diagnostic Logic',
    ],

    metrics: [
      {
        value: '5',
        unit: "Types",
        label: 'ANOMALY CLASSIFICATION',
        description:
          'Categorized black box alerts into specific business behaviors like Spike, Drop, and Drift',
      },
      {
        value: '30',
        unit: "Period",
        label: 'STATISTICAL ROLLING WINDOW',
        description:
          'Engineered temporal features like rolling means and standard deviations for trend detection',
      },
    ],

    showcase: [
      '/projects/project3/KPIS_&_Health_Bar.png',
    ],

    links: {
      github: 'https://github.com/build-by-Ayush/Explainable-AI-Anomaly-Detection-for-Small-Businesses.git',
      liveDemo: 'https://explainable-ai-anomaly-detection-for-small-businesses-dkyywvwa.streamlit.app/',
      video: null,
    },

    insights: [
      {
        heading: 'The Business Problem',
        paragraphs: [
          'Modern systems generate massive amounts of continuous data. Traditional monitoring relies on rigid manual thresholds, while modern machine learning often acts as a black box that alerts users without explaining the actual problem. The goal was to build a monitoring system that detects anomalies and mathematically explains what went wrong.',
        ],
      },

      {
        heading: '1. Data Generation and Feature Engineering',
        paragraphs: [
          'To create a controlled testing environment, I generated a synthetic industrial time series signal with daily cycles, random noise, and injected anomalies.',
        ],
        bullets: [
          {
            title: 'Temporal Features',
            description:
              'Engineered rolling means and standard deviations over a 30 period window to establish baseline trends and volatility.',
          },
          {
            title: 'Change Detection',
            description:
              'Calculated percentage changes and absolute value differences to identify sudden structural shifts in the data.',
          },
        ],
      },

      {
        heading: '2. Statistical Rules and Explainability Layer',
        paragraphs: [
          'While a teammate handled the training of the predictive LSTM model, I focused entirely on the data logic and explainability framework.',
        ],
        bullets: [
          {
            title: 'Mathematical Grounding',
            description:
              'Implemented Z score analysis to measure exactly how far a data point deviated from the historical mean',
          },
          {
            title: 'Rule Based Classification',
            description:
              'Built a logic engine that converted raw model outputs into five interpretable categories. It classified events as a Spike, Drop, Drift, Level Shift, or Volatility issue based on the extracted statistical features.',
          },
        ],
      },

      {
        heading: '3. Diagnostic Dashboard Architecture',
        paragraphs: [
          'I designed a Streamlit interface that moved beyond simple line charts to provide decision ready intelligence.  ',
        ],
        bullets: [
          {
            title: 'Statistical Visualization',
            description:
              'Plotted the raw signal alongside upper and lower Z score thresholds to visually prove why an anomaly was flagged',
          },
          {
            title: 'System Health Engine',
            description:
              'Programmed a dynamic health badge that calculates a Healthy, Warning, or Critical state based on weekly anomaly rates and severity distribution.',
          },
        ],
      },

      {
        heading: '4. The Final Impact',
        paragraphs: [
          'By combining statistical rules with predictive outputs, I transformed a basic alert script into an Explainable AI dashboard. This allows non technical business users to instantly understand both the mathematical severity and the physical shape of a system failure',
        ],
      },
    ],
  },
  //Project 4
  {
    id: 'adventure',
    title: 'Global Sales & Customer Demographics Analytics',
    subtitle:
      'Scalable Power BI model for global sales, pricing forecasts, and customer segmentation',

    thumbnail: '/projects/ecommerce-thumb.jpg',

    themeColor: '#d04467',

    // Used ONLY on Overview Featured Projects & Project List
    tags: ['Power BI', 'Data Modeling', 'DAX'],

    // Used in Project Detail page
    tools: [
      'Power BI (DAX, Power Query)',
      'Data Modeling',
      'CSV Datasets',
    ],

    techniques: [
      'Star Schema Architecture',
      'Advanced DAX Measures',
      'What If Pricing Scenarios',
    ],

    metrics: [
      {
        value: '17.4K',
        unit: null,
        label: 'UNIQUE CUSTOMERS',
        description:
          'Segmented the user base by occupation and income to identify the most lucrative target demographics',
      },
      {
        value: '2.2%',
        unit: null,
        label: 'GLOBAL RETURN RATE',
        description:
          'Tracked product returns against 24.9M in revenue to monitor manufacturing quality control',
      },
    ],

    showcase: [
      '/projects/project4/Exec_DashBoard.png',
      '/projects/project4/Map.png',
      '/projects/project4/Customer_Details.png',
      '/projects/project4/Product_Details.png',
    ],

    links: {
      github: 'https://github.com/build-by-Ayush/AdventureWorks_Enterprise_BI_Solution.git',
      liveDemo: null,
      video: null,
    },

    insights: [
      {
        heading: 'The Business Problem',
        paragraphs: [
          'AdventureWorks required a scalable business intelligence solution to replace their static reporting. The goal was to build an interactive, data driven Power BI model that empowers regional managers to monitor profitability, track return rates, and identify high value customer segments across a global market.',
        ],
      },

      {
        heading: '1. Data Architecture and ETL Pipeline',
        paragraphs: [
          'The original datasets consisted of raw, disconnected CSV files requiring heavy cleaning before analysis could begin.',
        ],
        bullets: [
          {
            title: 'Power Query Ingestion',
            description:
              'Engineered an automated ETL pipeline to ingest and clean data across Transactions, Returns, Products, and Customers.',
          },
          {
            title: 'Star Schema Deployment',
            description:
              'Organized the transformed tables into a robust Star Schema data model, establishing one to many relationships between centralized fact tables and surrounding dimension tables.',
          },
        ],
      },

      {
        heading: '2. Executive and Financial KPIs',
        paragraphs: [
          'The executive summary was designed to deliver a high level overview of core business health metrics.',
        ],
        bullets: [
          {
            title: 'Global Revenue Tracking',
            description:
              'Formulated complex DAX measures to track 24.9M in revenue and 10.5M in total profit across 25.2K global orders.',
          },
          {
            title: 'Quality Assurance',
            description:
              'Identified that the global return rate was contained at a healthy 2.2%, while specifically flagging "Shorts" as the most returned item requiring a quality assurance review.',
          },
        ],
      },

      {
        heading: '3. Product and Pricing Strategy',
        paragraphs: [
          'Enabled granular tracking of individual SKU performance against monthly targets to assist stakeholders with forecasting.',
        ],
        bullets: [
          {
            title: 'Dynamic Profit Forecasting',
            description:
              'Designed a What If pricing scenario using a slider parameter to simulate pricing adjustments.',
          },
          {
            title: 'Margin Analysis',
            description:
              'Built visual trend lines proving that Adjusted Profit margins scale predictably with Total Profit, allowing the business to instantly forecast the impact of price changes on the bottom line.',
          },
        ],
      },

      {
        heading: '4. Customer Segmentation and Market Footprint',
        paragraphs: [
          'Profiled the customer base and geographic distribution to identify the most lucrative demographics for the marketing team.',
        ],
        bullets: [
          {
            title: 'Target Demographics',
            description:
              'Discovered that the ideal customer profile skews heavily towards "Professionals" with an "Average" income level.',
          },
          {
            title: 'Loyalty Opportunities',
            description:
              'Highlighted high value outliers like the top customer who generated 12.4K across 6 orders, proving the financial potential for an elite loyalty programme for repeat buyers.',
          },
        ],
      },
    ],
  },

  //Project 5
  {
    id: 't20',
    title: 'T20 Cricket Performance Analytics Dashboard',
    subtitle:
      'Predictive framework for role-specific team selection and performance outlier detection',

    thumbnail: '/projects/ecommerce-thumb.jpg',
    status: "Completed",

    themeColor: '#22C55E',

    // Used ONLY on Overview Featured Projects & Project List
    tags: ['Power BI', 'Python', 'Data Modeling'],

    // Used in Project Detail page
    tools: [
      'Power BI (DAX, Power Query)',
      'Python',
      'Data Modeling',
      'CSV Datasets',
    ],

    techniques: [
      'Star Schema Architecture',
      'Multi Dimensional Player Evaluation',
      'Performance Outlier Detection',
      'Role Specific Metric Creation',
    ],

    metrics: [
      {
        value: '4',
        unit: 'Tables',
        label: 'STAR SCHEMA MODEL',
        description:
          'Integrated ball by ball match records and player information into a unified relational model',
      },
      {
        value: '5',
        unit: 'Player Roles',
        label: 'CUSTOM CLASSIFICATION',
        description:
          'Evaluated Openers, Anchors, Finishers, All Rounders, and Bowlers using distinct statistical parameters',
      },
    ],

    showcase: [
      '/projects/project5/Openers.png',
      '/projects/project5/Anchors.png',
      '/projects/project5/All_Rounder.png',
      '/projects/project5/Bowlers.png',
      '/projects/project5/Final11.png',
    ],

    links: {
      github: 'https://github.com/build-by-Ayush/Cricket-Data-Analysis-PowerBI.git',
      liveDemo: null,
      video: null,
    },

    insights: [
      {
        heading: 'The Business Problem',
        paragraphs: [
          'Sports analytics requires moving beyond basic averages to evaluate true match impact. The objective was to ingest extensive T20 cricket data and build a predictive framework to select a statistically optimized "Final 11" team based on role specific metrics.',
        ],
      },

      {
        heading: '1. Data Ingestion and Modeling',
        paragraphs: [
          'I extracted ball by ball match records and transformed the raw data using Power Query to prepare it for visualization.',
        ],
        bullets: [
          {
            title: 'Star Schema Architecture',
            description:
              'Structured the four distinct datasets (matches, batting, bowling, players) into a cohesive relational data model to allow seamless cross filtering.',
          },
          {
            title: 'Data Transformation',
            description:
              'Cleaned and standardized the raw CSV files, ensuring accurate relationship mapping between player profiles and their match performances.',
          },
        ],
      },

      {
        heading: '2. Advanced DAX and Custom Metrics',
        paragraphs: [
          'The analysis required moving beyond simple counting to calculate true performance indicators.',
        ],
        bullets: [
          {
            title: 'Role Specific KPIs',
            description:
              'Formulated advanced DAX measures to calculate critical metrics like Batting Strike Rate, Boundary Percentage, and Bowling Economy.',
          },
          {
            title: 'Multi Dimensional Evaluation',
            description:
              'Created custom logic to evaluate All Rounders by balancing low bowling economy with high batting strike rates.',
          },
        ],
      },

      {
        heading: '3. Visual Analytics and Outlier Detection',
        paragraphs: [
          'I designed the dashboard to visually separate players based on their specific playing styles and match situations.',
        ],
        bullets: [
          {
            title: 'Scatter Plot Diagnostics',
            description:
              'Deployed scatter plots to visually isolate performance outliers, easily identifying players who possess both high stability and high acceleration.',
          },
          {
            title: 'Role Differentiation',
            description:
              'Built dedicated analytical views to contrast Anchors who stabilize innings against Power Hitters who maximize powerplay scoring.',
          },
        ],
      },

      {
        heading: '4. The Final Impact',
        paragraphs: [
          'This project served as my comprehensive introduction to business intelligence, successfully translating raw sports data into an interactive analytical framework.',
        ],
        bullets: [
          {
            title: 'Data Driven Team Selection',
            description:
              "Aggregated the top performers into a 'Final 12' dashboard that summarizes the hypothetical team's overall batting depth and bowling strength.",
          },
          {
            title: 'Foundational BI Application',
            description:
              'Proved my ability to learn and apply core Power BI concepts (ETL, data modeling, and DAX) to solve a complex, multi variable analytical problem.',
          },
        ],
      },
    ],
  },

  //Project 6
  {
    id: 'caresync',
    title: 'CareSync: Adaptive Notification Analytics',
    subtitle:
      'On-device ML system for adaptive notification timing and behavioural analytics',

    thumbnail: '/projects/ecommerce-thumb.jpg',
    status: "On-Hold",

    themeColor: '#9333EA',

    // Used ONLY on Overview Featured Projects & Project List
    tags: ['SQLite', 'Data Visualization', 'Kotlin'],

    // Used in Project Detail page
    tools: [
      'Data Visualization',
      'Kotlin',
      'SQLite (Room Database)',
      'Python',
    ],

    techniques: [
      'Relational Database Design',
      'Predictive Modelling',
      'Behavioural Analytics',
      'Gamification Logic',
    ],

    metrics: [
      {
        value: '62K',
        unit: "Rows",
        label: 'SYNTHETIC DATASET',
        description:
          'Engineered a robust training dataset encoding behavioural rules across 25 app categories to train the predictive model',
      },
      {
        value: '7',
        unit: "KPIs",
        label: 'ANALYTICS DASHBOARD',
        description:
          'Designed the visual analytics engine tracking task completion rates, productivity hours, and 12 distinct user achievements',
      },
    ],

    showcase: [
      '/projects/project6/Dashboard Page.jpg',
      '/projects/project6/Dashboard page 2.jpg',
      '/projects/project6/Welcome Page.png',
      '/projects/project6/Main Page.jpg',
      '/projects/project6/Achivement Card.jpg',
      '/projects/project6/Profile Panel.jpg',
      '/projects/project6/Settings Pane 1.jpg',
      '/projects/project6/Settings Pane 2.jpg',
      '/projects/project6/App Block List.jpg',
      '/projects/project6/App Blocked Screen.jpg',
    ],

    links: {
      github: 'https://github.com/build-by-Ayush/CareSync-Intelligent_Adaptive_Reminder_Engagement_System.git',
      liveDemo: null,
      video: null,
    },

    insights: [
      {
        heading: 'The Business Problem',
        paragraphs: [
          'Standard reminder applications suffer from a massive 70% dismissal rate because they operate on rigid, static schedules. To solve this, I collaborated on an intelligent adaptive reminder system. While the engineering team handled the core app architecture, I led the database design, predictive modelling, and the visual analytics dashboard to track and optimise user behaviour.',
        ],
      },

      {
        heading: '1. Database Architecture and Event Logging',
        paragraphs: [
          'To understand exactly why users were ignoring notifications, the system needed to capture deep contextual data.',
        ],
        bullets: [
          {
            title: 'Relational Schema',
            description:
              'Designed a local SQLite database comprising 6 interconnected tables with strict foreign key constraints to ensure data integrity.',
          },
          {
            title: 'Contextual Logging',
            description:
              'Programmed the event tracking system to capture 19 distinct context fields per interaction, logging metrics like response time, device state, and active app categories to build a complete behavioural profile',
          },
        ],
      },

      {
        heading: '2. Predictive Analytics and Machine Learning',
        paragraphs: [
          'The goal was to predict the exact hour a user was most receptive to completing a task.',
        ],
        bullets: [
          {
            title: 'Training Data Generation',
            description:
              'Engineered a synthetic dataset of 62,000 rows that mathematically encoded complex business logic and distraction levels across 25 different app categories.',
          },
          {
            title: 'Model Optimization',
            description:
              'Trained a Random Forest model that achieved 99.99% accuracy on this structured ruleset, proving it could successfully map our business logic. This heavily outperformed our 91.47% Logistic Regression baseline and was deployed for on-device inference.',
          },
        ],
      },

      {
        heading: '3. Behavioural Logic and Risk Detection',
        paragraphs: [
          'Data is useless if the system does not react to it. I engineered the analytical rules engine that actively monitors task health.',
        ],
        bullets: [
          {
            title: 'The 40% Threshold',
            description:
              "Wrote the core logic to identify struggling tasks. If a task's completion rate drops below 40% over 5 days, the system automatically flags it as 'At Risk.'",
          },
          {
            title: 'Dynamic Adaptation',
            description:
              'Programmed the engine to automatically adjust the notification frequency multiplier and escalate task priority as deadlines approach, shifting the app from a passive alarm to an active decision support tool.',
          },
        ],
      },

      {
        heading: '4. Gamification and Visual Dashboard',
        paragraphs: [
          'To maintain long term user engagement, I designed the mathematical scoring system and visual analytics interface.',
        ],
        bullets: [
          {
            title: 'Dynamic XP Scoring',
            description:
              'Built a 5-level gamification system where base points are awarded by priority and multiplied by response time, heavily rewarding users who complete tasks within 30 minutes of a notification.',
          },
          {
            title: 'Productivity Visualization',
            description:
              "Designed the analytics dashboard tracking 7 core KPIs, featuring interactive weekly heatmaps and bar charts that reveal the user's most productive hours, turning raw database logs into actionable personal insights.",
          },
        ],
      },
    ],
  },
];

export const certificates = [
  {
    id: 'powerbi',
    title: 'Microsoft Certified: Power BI Data Analyst Associate',
    issuer: 'Microsoft',
    date: '2026',
    image: '/certs/pl300.png',

    learned: {
      scope:
        'I learned how to prepare, model, visualize, and analyze data in Power BI to build interactive business reports.',

      analytics: [
        'Built data models and relationships for accurate reporting.',
        'Wrote DAX measures and transformed data with Power Query.',
        'Designed interactive dashboards using charts, filters, and drill-through.',
      ],

      takeaway:
        'I can turn raw data into clear dashboards that support informed business decisions.',
    },
  },

  {
    id: 'sql-advanced',
    title: 'The Complete SQL Bootcamp',
    issuer: 'Udemy',
    date: '2025',
    image: '/certs/sql.png',

    learned: {
      scope:
        'I learned SQL from core querying to advanced analytical techniques through hands-on projects and real datasets.',

      analytics: [
        'Wrote SQL queries using joins, filtering, and aggregation.',
        'Built CTEs, window functions, and data transformations.',
        'Designed analytical queries for reporting and exploratory analysis.',
      ],

      takeaway:
        'I can extract, shape, and analyze data using reliable SQL workflows.',
    },
  },

  {
    id: 'nosql',
    title: 'NoSQL Course Training – MongoDB Developer',
    issuer: 'Infosys Springboard',
    date: '2024',
    image: '/certs/nosql.png',

    learned: {
      scope:
        'I learned NoSQL fundamentals, data modeling, and how to choose the right database for different business needs.',

      analytics: [
        'Compared SQL and NoSQL for analytical workloads.',
        'Mapped business scenarios to key-value, document, column, and graph models.',
        'Applied CAP theorem to evaluate database trade-offs.',
      ],

      takeaway:
        'I can choose data models that support scalable analytics and fit business requirements.',
    },
  },
];

export const education = {
  degree: 'Bachelor of Engineering (B.E)',
  field: 'Computer Science & Engineering (Data Science)',
  college: 'Sai Vidya Institute Of Technology',
  location: 'Bengaluru, India',
  duration: '2022 — 2026',
  cgpa: '8.81 / 10',
  description:
    'Specialized in data science and analytics coursework alongside core CS fundamentals. Active in analytics club and hackathon competitions.',
  coursework: [
    'Database Management Systems (DBMS)',
    'Exploratory Data Analysis',
    'Big Data Analytics',
    'Data Visualization',
    'Statistical Machine Learning',
    'NoSQL Databases',
  ],
};

export const experiences = [
  {
    id: 'data-analyst-intern',
    title: 'Data Analyst Intern',
    organization: 'Swizosoft',
    logo: "/exp/swizosoft.png",
    duration: 'Feb 2026 — Jun 2026',
    role: 'Data Analytics & Reporting',
    tagline: 'An intensive, execution-focused industrial program simulating complex data challenges. Acted as the lead analyst designing end-to-end solutions.',
    responsibilities: [
      `Engineered advanced analytical features for time series data including rolling averages, 
      volatility metrics, and Z-scores to detect structural shifts in industrial signals.`,
      `Built robust data processing pipelines using Python and Pandas to clean, transform, and 
      aggregate complex datasets for downstream analysis.`,
      `Deployed an interactive Funnel Optimization Platform featuring a 4 quadrant product 
      matrix to calculate true SKU level profitability after return processing.`,
      `Developed a custom rule based inference engine to automatically flag critical 
      business events, such as revenue leakage and sudden conversion friction.`,
    ],

    overview: [
      {
        title: 'Data Architecture: ',
        text: 'Built automated Python pipelines and multi-table relational models.',
      },
      {
        title: 'Business Intelligence: ',
        text: 'Developed interactive platforms for funnel and profitability analytics.',
      },
      {
        title: 'Predictive Systems: ',
        text: 'Engineered time-series anomaly detection using statistical metrics.',
      },
    ],
  },
];
