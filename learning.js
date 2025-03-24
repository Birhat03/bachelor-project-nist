// Learning page functionality for Gamified Privacy

console.log("Learning.js loading...");

// Module data structure
const moduleData = {
    identify: [
        {
            id: 1,
            title: "Privacy Risk Assessment",
            description: "Learn how to identify and assess privacy risks in systems and processes.",
            duration: "15 minutes",
            content: `
                <h1>Privacy Risk Assessment</h1>
                <div class="module-section">
                    <h2>Introduction</h2>
                    <p>Privacy risk assessment is a systematic process for evaluating potential privacy impacts when processing personal data. This module will guide you through the steps of conducting a thorough privacy risk assessment.</p>
                    
                    <p>The NIST Privacy Framework defines privacy risk as "the likelihood that individuals will experience problems resulting from data processing, and the impact should they occur."</p>
                </div>
                
                <div class="module-section">
                    <h2>Key Concepts</h2>
                    <ul>
                        <li><strong>Privacy Risk:</strong> The potential for adverse effects on individuals arising from data processing</li>
                        <li><strong>Likelihood:</strong> The probability that a privacy problem will occur</li>
                        <li><strong>Impact:</strong> The magnitude of harm if a privacy problem occurs</li>
                        <li><strong>Risk Factors:</strong> Elements that contribute to privacy risk</li>
                    </ul>
                </div>
                
                <div class="module-section">
                    <h2>Steps in Privacy Risk Assessment</h2>
                    <ol>
                        <li>
                            <h3>Identify Data Processing Activities</h3>
                            <p>Document how data is collected, used, shared, stored, and deleted within your systems and processes.</p>
                        </li>
                        <li>
                            <h3>Identify Privacy Risks</h3>
                            <p>Analyze data processing activities to determine potential problems individuals might experience.</p>
                        </li>
                        <li>
                            <h3>Assess Likelihood and Impact</h3>
                            <p>Evaluate the probability of each risk occurring and the severity of potential harm.</p>
                        </li>
                        <li>
                            <h3>Prioritize Risks</h3>
                            <p>Rank risks based on their combined likelihood and impact scores.</p>
                        </li>
                        <li>
                            <h3>Identify Mitigations</h3>
                            <p>Develop controls to reduce or eliminate prioritized risks.</p>
                        </li>
                    </ol>
                </div>
                
                <div class="module-section">
                    <h2>Best Practices</h2>
                    <ul>
                        <li>Involve multiple stakeholders in the risk assessment process</li>
                        <li>Document all assumptions and decisions</li>
                        <li>Review and update risk assessments regularly</li>
                        <li>Consider both organizational and individual impacts</li>
                        <li>Use consistent evaluation criteria across assessments</li>
                    </ul>
                </div>
                
                <div class="module-section">
                    <h2>Summary</h2>
                    <p>Privacy risk assessment is a critical process that helps organizations understand and address potential privacy problems before they occur. By systematically evaluating data processing activities, organizations can implement appropriate privacy controls and better protect individuals' privacy.</p>
                </div>
            `
        },
        {
            id: 2,
            title: "Data Inventory",
            description: "Learn how to catalog data processing activities and systems.",
            duration: "20 minutes",
            content: `
                 <h1>Data Inventory</h1>
    <div class="module-section">
        <h2>Introduction</h2>
        <p>A data inventory is a comprehensive catalog of all personal data within an organization. It documents what data you collect, where it's stored, how it's used, and who has access to it. Creating a thorough data inventory is a foundational step for privacy compliance and effective data governance.</p>
        
        <p>According to the NIST Privacy Framework, a data inventory enables organizations to "identify the systems, products, or services that process data, the owners, and the data actions."</p>
    </div>
    
    <div class="module-section">
        <h2>Key Components</h2>
        <ul>
            <li><strong>Data Elements:</strong> Categories and specific types of personal data collected</li>
            <li><strong>Processing Activities:</strong> How the data is used within the organization</li>
            <li><strong>Data Sources:</strong> Where and how the data is collected</li>
            <li><strong>Data Recipients:</strong> Internal and external entities with whom data is shared</li>
            <li><strong>Storage Locations:</strong> Where data is physically or virtually stored</li>
            <li><strong>Retention Periods:</strong> How long data is kept before deletion</li>
        </ul>
    </div>
    
    <div class="module-section">
        <h2>Creating a Data Inventory</h2>
        <ol>
            <li>
                <h3>Define Scope and Methodology</h3>
                <p>Determine what personal data processing activities to include and how detailed your inventory will be.</p>
            </li>
            <li>
                <h3>Identify Stakeholders</h3>
                <p>Engage with teams across the organization who collect, use, or manage personal data.</p>
            </li>
            <li>
                <h3>Gather Information</h3>
                <p>Use surveys, interviews, and system scans to document data processing activities.</p>
            </li>
            <li>
                <h3>Document Data Flows</h3>
                <p>Map how data moves through your organization from collection to deletion.</p>
            </li>
            <li>
                <h3>Categorize by Risk Level</h3>
                <p>Identify high-risk data processing that may require additional safeguards.</p>
            </li>
        </ol>
    </div>
    
    <div class="module-section">
        <h2>Best Practices</h2>
        <ul>
            <li>Use a consistent, structured format for documentation</li>
            <li>Update the inventory regularly as systems and processes change</li>
            <li>Link inventory items to legal bases for processing</li>
            <li>Document the purpose for each processing activity</li>
            <li>Use automated discovery tools to supplement manual inventory efforts</li>
        </ul>
    </div>
    
    <div class="module-section">
        <h2>Summary</h2>
        <p>A comprehensive data inventory provides visibility into your organization's data processing activities, helps identify privacy risks, and serves as the foundation for privacy compliance efforts. By systematically documenting what personal data you process and how, you can better protect privacy and respond effectively to data subject requests.</p>
    </div>
`
        }
    ],
    govern: [
        {
            id: 3,
            title: "Privacy Governance",
            description: "Learn about establishing privacy roles and responsibilities.",
            duration: "25 minutes",
            content: `
    <h1>Privacy Governance</h1>
    <div class="module-section">
        <h2>Introduction</h2>
        <p>Privacy governance establishes the organizational structure, roles, responsibilities, and policies needed to manage privacy risks effectively. A robust governance framework ensures that privacy is integrated into the organization's operations and culture.</p>
        
        <p>The NIST Privacy Framework emphasizes that governance enables organizations to "develop and implement the organizational governance structure to enable an ongoing understanding of the organization's risk management priorities."</p>
    </div>
    
    <div class="module-section">
        <h2>Key Components</h2>
        <ul>
            <li><strong>Privacy Leadership:</strong> Designated roles with privacy oversight responsibility</li>
            <li><strong>Policies and Procedures:</strong> Documented rules for privacy practices</li>
            <li><strong>Training Programs:</strong> Education to ensure awareness of privacy requirements</li>
            <li><strong>Risk Management:</strong> Processes to identify and address privacy risks</li>
            <li><strong>Compliance Monitoring:</strong> Ongoing verification of privacy controls</li>
            <li><strong>Incident Response:</strong> Plans for addressing privacy breaches</li>
        </ul>
    </div>
    
    <div class="module-section">
        <h2>Establishing Privacy Governance</h2>
        <ol>
            <li>
                <h3>Define Privacy Roles</h3>
                <p>Establish key positions such as Privacy Officer, data stewards, and privacy champions.</p>
            </li>
            <li>
                <h3>Develop Privacy Policies</h3>
                <p>Create clear, accessible policies that define how the organization handles personal data.</p>
            </li>
            <li>
                <h3>Implement Privacy Processes</h3>
                <p>Establish procedures for privacy impact assessments, data subject requests, and breach response.</p>
            </li>
            <li>
                <h3>Create Reporting Structures</h3>
                <p>Define how privacy matters are escalated, reported, and addressed within the organization.</p>
            </li>
            <li>
                <h3>Establish Oversight Mechanisms</h3>
                <p>Implement regular privacy reviews, audits, and board-level reporting.</p>
            </li>
        </ol>
    </div>
    
    <div class="module-section">
        <h2>Best Practices</h2>
        <ul>
            <li>Position privacy leadership at a senior level with direct board access</li>
            <li>Integrate privacy considerations into business processes</li>
            <li>Provide ongoing privacy training to all employees</li>
            <li>Regularly update policies to reflect changing regulations</li>
            <li>Document and communicate privacy decisions and rationales</li>
        </ul>
    </div>
    
    <div class="module-section">
        <h2>Summary</h2>
        <p>Effective privacy governance creates accountability and ensures that privacy is considered in all aspects of the organization's operations. By establishing clear roles, policies, and procedures, organizations can build trust with customers, comply with regulations, and mitigate privacy risks.</p>
    </div>
`
        }
    ],
    control: [
        {
            id: 4,
            title: "Data Management",
            description: "Learn techniques for managing data throughout its lifecycle.",
            duration: "20 minutes",
            content: `
    <h1>Data Management</h1>
    <div class="module-section">
        <h2>Introduction</h2>
        <p>Data management encompasses the practices that control how personal data is collected, used, stored, shared, and deleted throughout its lifecycle. Proper data management helps organizations maintain data quality, minimize privacy risks, and comply with privacy regulations.</p>
        
        <p>According to the NIST Privacy Framework, organizations should "develop and implement appropriate activities to enable organizations or individuals to manage data with sufficient granularity to manage privacy risks."</p>
    </div>
    
    <div class="module-section">
        <h2>Key Concepts</h2>
        <ul>
            <li><strong>Data Minimization:</strong> Collecting only necessary personal data</li>
            <li><strong>Purpose Limitation:</strong> Using data only for specified purposes</li>
            <li><strong>Data Quality:</strong> Ensuring data accuracy and completeness</li>
            <li><strong>Storage Limitation:</strong> Retaining data only as long as necessary</li>
            <li><strong>Data Lifecycle:</strong> Managing data from collection to deletion</li>
            <li><strong>Privacy Controls:</strong> Safeguards to protect personal data</li>
        </ul>
    </div>
    
    <div class="module-section">
        <h2>Data Lifecycle Management</h2>
        <ol>
            <li>
                <h3>Collection</h3>
                <p>Gather only necessary data with appropriate notice and consent.</p>
            </li>
            <li>
                <h3>Use</h3>
                <p>Process data only for specified, legitimate purposes.</p>
            </li>
            <li>
                <h3>Storage</h3>
                <p>Secure data with appropriate controls and encryption.</p>
            </li>
            <li>
                <h3>Sharing</h3>
                <p>Transfer data only to authorized recipients with appropriate protections.</p>
            </li>
            <li>
                <h3>Archiving</h3>
                <p>Move inactive data to secure storage with limited access.</p>
            </li>
            <li>
                <h3>Deletion</h3>
                <p>Securely erase data when no longer needed or upon request.</p>
            </li>
        </ol>
    </div>
    
    <div class="module-section">
        <h2>Best Practices</h2>
        <ul>
            <li>Implement data classification schemes to prioritize protection</li>
            <li>Establish clear data retention and deletion schedules</li>
            <li>Regularly audit data access and processing activities</li>
            <li>Automate data management tasks where possible</li>
            <li>Document the legal basis for each processing activity</li>
        </ul>
    </div>
    
    <div class="module-section">
        <h2>Summary</h2>
        <p>Effective data management is essential for privacy protection and regulatory compliance. By implementing controls throughout the data lifecycle, organizations can reduce privacy risks, maintain data quality, and build trust with individuals whose data they process.</p>
    </div>
`
        }
    ],
    communicate: [
        {
            id: 5,
            title: "Privacy Notices",
            description: "Learn how to create clear, meaningful privacy notices.",
            duration: "15 minutes",
            content:  `
            <h1>Privacy Notices</h1>
            <div class="module-section">
                <h2>Introduction</h2>
                <p>Privacy notices inform individuals about how their personal data is collected, used, shared, and protected. Effective notices promote transparency, enable informed decisions, and build trust with customers, users, and employees.</p>
                
                <p>The NIST Privacy Framework emphasizes that organizations should "provide privacy notices to enable individuals to understand how their personal information is processed."</p>
            </div>
            
            <div class="module-section">
                <h2>Key Components</h2>
                <ul>
                    <li><strong>Types of Data Collected:</strong> Categories of personal information processed</li>
                    <li><strong>Collection Methods:</strong> How data is obtained directly or indirectly</li>
                    <li><strong>Processing Purposes:</strong> Why the data is needed and how it's used</li>
                    <li><strong>Data Sharing:</strong> Third parties with whom data is shared</li>
                    <li><strong>Individual Rights:</strong> How to access, correct, or delete personal data</li>
                    <li><strong>Security Measures:</strong> How data is protected</li>
                    <li><strong>Retention Periods:</strong> How long data is kept</li>
                    <li><strong>Contact Information:</strong> How to reach the organization with questions</li>
                </ul>
            </div>
            
            <div class="module-section">
                <h2>Creating Effective Privacy Notices</h2>
                <ol>
                    <li>
                        <h3>Know Your Legal Requirements</h3>
                        <p>Identify the specific disclosures required by applicable privacy laws.</p>
                    </li>
                    <li>
                        <h3>Use Clear, Plain Language</h3>
                        <p>Write notices that are understandable to your average user, avoiding legal jargon.</p>
                    </li>
                    <li>
                        <h3>Layer Your Notice</h3>
                        <p>Provide high-level summaries with links to more detailed information.</p>
                    </li>
                    <li>
                        <h3>Make Notices Accessible</h3>
                        <p>Ensure notices can be easily found and accessed across devices.</p>
                    </li>
                    <li>
                        <h3>Provide Timely Notices</h3>
                        <p>Present relevant privacy information at appropriate decision points.</p>
                    </li>
                </ol>
            </div>
            
            <div class="module-section">
                <h2>Best Practices</h2>
                <ul>
                    <li>Use visual elements like icons, headings, and formatting to improve readability</li>
                    <li>Test notices with users to ensure they're understandable</li>
                    <li>Update notices when data practices change</li>
                    <li>Tailor notices to different audiences and contexts</li>
                    <li>Provide notices in multiple languages when serving diverse populations</li>
                </ul>
            </div>
            
            <div class="module-section">
                <h2>Summary</h2>
                <p>Effective privacy notices are essential for transparency and building trust. By crafting clear, accessible notices, organizations can help individuals understand how their data is used and make informed decisions about sharing their information.</p>
            </div>
        `
        }
    ],
    protect: [
        {
            id: 6,
            title: "Data Protection",
            description: "Learn about technical safeguards for protecting personal data.",
            duration: "30 minutes",
            content: `
    <h1>Data Protection</h1>
    <div class="module-section">
        <h2>Introduction</h2>
        <p>Data protection encompasses the technical and organizational measures implemented to safeguard personal data from unauthorized access, use, disclosure, alteration, or destruction. Strong data protection practices help prevent privacy breaches and maintain data confidentiality, integrity, and availability.</p>
        
        <p>The NIST Privacy Framework states that organizations should "develop and implement appropriate data security and privacy measures for systems and products processing data."</p>
    </div>
    
    <div class="module-section">
        <h2>Key Protection Measures</h2>
        <ul>
            <li><strong>Access Controls:</strong> Limiting who can view or use personal data</li>
            <li><strong>Encryption:</strong> Protecting data confidentiality during storage and transmission</li>
            <li><strong>Anonymization/Pseudonymization:</strong> Removing or replacing identifying information</li>
            <li><strong>Data Loss Prevention:</strong> Preventing unauthorized data exfiltration</li>
            <li><strong>Security Monitoring:</strong> Detecting and responding to security incidents</li>
            <li><strong>Backup and Recovery:</strong> Ensuring data availability after incidents</li>
        </ul>
    </div>
    
    <div class="module-section">
        <h2>Implementing Data Protection</h2>
        <ol>
            <li>
                <h3>Conduct Risk Assessment</h3>
                <p>Identify threats, vulnerabilities, and potential impacts to personal data.</p>
            </li>
            <li>
                <h3>Apply Defense in Depth</h3>
                <p>Implement multiple layers of controls to protect data.</p>
            </li>
            <li>
                <h3>Limit Data Access</h3>
                <p>Apply the principle of least privilege to data access permissions.</p>
            </li>
            <li>
                <h3>Protect Data in Transit</h3>
                <p>Use secure protocols and encryption when transmitting personal data.</p>
            </li>
            <li>
                <h3>Secure Data at Rest</h3>
                <p>Implement encryption and access controls for stored data.</p>
            </li>
            <li>
                <h3>Monitor and Detect</h3>
                <p>Use security monitoring to identify potential data breaches.</p>
            </li>
        </ol>
    </div>
    
    <div class="module-section">
        <h2>Best Practices</h2>
        <ul>
            <li>Adopt a privacy by design approach in all systems and processes</li>
            <li>Regularly test security controls through audits and penetration testing</li>
            <li>Train employees on security awareness and data protection</li>
            <li>Keep security software and systems updated with patches</li>
            <li>Implement a data breach response plan</li>
        </ul>
    </div>
    
    <div class="module-section">
        <h2>Summary</h2>
        <p>Data protection is critical for maintaining privacy and complying with regulations. By implementing comprehensive technical and organizational safeguards, organizations can significantly reduce the risk of privacy breaches and build trust with the individuals whose data they process.</p>
    </div>
`
        }
    ]
};

// Cached DOM elements
let domElements = {};

// Track the currently selected core and module
let currentCore = 'identify';
let currentModuleId = null;
let totalModules = 0;

// Initialize the learning page
document.addEventListener('DOMContentLoaded', () => {
    // Cache frequently accessed DOM elements
    cacheDOMElements();
    
    // Count total modules for progress tracking
    countTotalModules();
    
    // Initialize the page
    initializeLearningPage();
    
    // Set up event listeners
    setupCoreTabs();
    setupModuleNavigation();
});

// Cache frequently accessed DOM elements for better performance
function cacheDOMElements() {
    domElements = {
        selectionSection: document.getElementById('selection-section'),
        contentSection: document.getElementById('module-content-section'),
        moduleTitle: document.getElementById('current-module-title'),
        contentDisplay: document.getElementById('module-content-display'),
        readingProgress: document.getElementById('reading-progress'),
        modulesCompletedElement: document.getElementById('modulesCompleted'),
        quizzesPassedElement: document.getElementById('quizzesPassed'),
        pointsEarnedElement: document.getElementById('pointsEarned'),
        progressBars: document.querySelectorAll('.progress-bar-fill'),
        progressPercentages: document.querySelectorAll('.progress-percentage'),
        backButton: document.getElementById('back-to-modules'),
        completeButton: document.getElementById('mark-complete-btn')
    };
}

// Count the total number of modules across all cores
function countTotalModules() {
    totalModules = 0;
    Object.keys(moduleData).forEach(core => {
        totalModules += moduleData[core].length;
    });
}

// Initialize the learning page
function initializeLearningPage() {
    // Load user progress
    const progress = loadUserProgress();
    
    // Generate module cards for each core function
    generateModuleCards();
    
    // Update module statuses based on progress
    updateModuleStatuses(progress);
    
    // Update progress UI
    updateProgressUI(progress);
}

// Generate module cards for each core function
function generateModuleCards() {
    Object.keys(moduleData).forEach(core => {
        if (core !== 'identify') { // 'identify' is already in the HTML
            const coreModulesContainer = document.getElementById(`${core}-modules`);
            
            if (coreModulesContainer) {
                // Add core header with title and description
                const coreHeader = document.createElement('div');
                coreHeader.className = 'core-header';
                coreHeader.innerHTML = `
                    <h2><i class="fas fa-${getCoreIcon(core)}"></i> ${capitalizeFirstLetter(core)} Core Function</h2>
                    <p>${getCoreDescription(core)}</p>
                `;
                coreModulesContainer.appendChild(coreHeader);
                
                // Add module cards
                moduleData[core].forEach(module => {
                    const moduleCard = createModuleCard(module, core);
                    coreModulesContainer.appendChild(moduleCard);
                });
            }
        }
    });
}

// Create a module card element
function createModuleCard(module, core) {
    const div = document.createElement('div');
    div.className = 'module-card'; // Remove 'locked' class
    div.dataset.moduleId = module.id;
    div.dataset.core = core;
    
    div.innerHTML = `
        <div class="module-header">
            <h3><i class="fas fa-book"></i> Module ${module.id}: ${module.title}</h3>
            <span class="module-status">Available</span>
        </div>
        <p>${module.description}</p>
        <div class="module-footer">
            <span class="module-duration"><i class="far fa-clock"></i> ${module.duration}</span>
            <button class="start-module-btn">Start Module</button>
        </div>
    `;
    
    return div;
}

// Set up the core function tabs
function setupCoreTabs() {
    const coreTabs = document.querySelectorAll('.core-tab');
    
    coreTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const core = this.dataset.core;
            
            // Update active tab
            coreTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Update visible modules
            const coreModules = document.querySelectorAll('.core-modules');
            coreModules.forEach(m => m.classList.remove('active'));
            document.getElementById(`${core}-modules`).classList.add('active');
            
            // Update current core
            currentCore = core;
        });
    });
}

// Set up module navigation
function setupModuleNavigation() {
    console.log("Setting up module navigation...");
    
    // Get direct references to buttons - don't rely on cached elements
    const backButton = document.getElementById('back-to-modules');
    const completeButton = document.getElementById('mark-complete-btn');
    
    console.log("Button elements found:", {
        backButtonFound: !!backButton, 
        completeButtonFound: !!completeButton
    });
    
    // Skip setupModuleButtons() call which might be replacing our buttons
    // setupModuleButtons();  // <-- This might be causing problems, remove it
    
    // Back button handler
    if (backButton) {
        console.log("Setting up back button");
        
        // Clear previous event listeners and create a fresh clone
        backButton.replaceWith(backButton.cloneNode(true));
        
        // Get fresh reference to the new button
        const freshBackButton = document.getElementById('back-to-modules');
        
        // Add event listener with debugging
        freshBackButton.addEventListener('click', function(event) {
            console.log("Back button clicked!", event);
            event.preventDefault();
            event.stopPropagation();
            
            // Get fresh references to sections
            const selectionSection = document.getElementById('selection-section');
            const contentSection = document.getElementById('module-content-section');
            
            console.log("Sections found:", { 
                selectionSection: !!selectionSection, 
                contentSection: !!contentSection 
            });
            
            // Toggle visibility
            if (contentSection) contentSection.style.display = 'none';
            if (selectionSection) selectionSection.style.display = 'block';
        });
    } else {
        console.error("Back button not found in DOM!");
    }
    
    // Complete button handler
    if (completeButton) {
        console.log("Setting up complete button");
        
        // Clear previous event listeners and create a fresh clone
        completeButton.replaceWith(completeButton.cloneNode(true));
        
        // Get fresh reference to the new button
        const freshCompleteButton = document.getElementById('mark-complete-btn');
        
        // Add event listener with debugging
        freshCompleteButton.addEventListener('click', function(event) {
            console.log("Complete button clicked!", event);
            event.preventDefault();
            event.stopPropagation();
            
            if (currentModuleId) {
                console.log(`Attempting to complete module ${currentModuleId}`);
                
                // Direct call to completeCurrentModule which handles everything
                completeCurrentModule();
            } else {
                console.error("No current module selected for completion");
            }
        });
    } else {
        console.error("Complete button not found in DOM!");
    }
}

// Fixed version of the displayModuleContent function
function displayModuleContent(core, moduleId) {
    console.log(`Displaying module: core=${core}, moduleId=${moduleId}`);
    
    // Convert moduleId to number if it's a string
    if (typeof moduleId === 'string') {
        moduleId = parseInt(moduleId);
    }
    
    // Find the module data
    const module = findModule(core, moduleId);
    if (!module) {
        console.error(`Module not found: core=${core}, moduleId=${moduleId}`);
        alert('Sorry, this module content could not be loaded.');
        return;
    }
    
    console.log("Module found:", module);
    
    // Update current module tracking
    currentCore = core;
    currentModuleId = moduleId;
    
    // Get DOM elements directly instead of relying on cached versions
    const selectionSection = document.getElementById('selection-section');
    const contentSection = document.getElementById('module-content-section');
    const moduleTitle = document.getElementById('current-module-title');
    const contentDisplay = document.getElementById('module-content-display');
    
    console.log("DOM elements found:", {
        selectionSection: !!selectionSection,
        contentSection: !!contentSection,
        moduleTitle: !!moduleTitle,
        contentDisplay: !!contentDisplay
    });
    
    // Update the module content title
    if (moduleTitle) {
        moduleTitle.textContent = `Module ${moduleId}: ${module.title}`;
    } else {
        console.error("Module title element not found!");
    }
    
    // Load the content
    if (contentDisplay) {
        // Debug content before setting
        console.log("Setting module content, length:", module.content.length);
        contentDisplay.innerHTML = module.content;
    } else {
        console.error("Content display element not found!");
    }
    
    // Show the content section, hide the selection section
    if (selectionSection) {
        selectionSection.style.display = 'none';
    } else {
        console.error("Selection section element not found!");
    }
    
    if (contentSection) {
        contentSection.style.display = 'block';
        // Force reflow to ensure display change takes effect
        contentSection.offsetHeight;
    } else {
        console.error("Content section element not found!");
    }
    
    // Reset reading progress
    const readingProgress = document.getElementById('reading-progress');
    if (readingProgress) {
        readingProgress.textContent = '0%';
    }
    
    // Update the cached DOM elements
    cacheDOMElements();
    
    // Set up scroll tracking for reading progress
    setupScrollTracking();
    setupModuleNavigation();
}

// Find a module by core and ID
function findModule(core, moduleId) {
    return moduleData[core].find(m => m.id === moduleId);
}

// Set up scroll tracking for reading progress
function setupScrollTracking() {
    if (domElements.contentDisplay && domElements.readingProgress) {
        // Check if content requires scrolling
        if (domElements.contentDisplay.scrollHeight <= domElements.contentDisplay.clientHeight) {
            // Content fits without scrolling
            domElements.readingProgress.textContent = '100%';
            return;
        }
        
        // Remove any existing event listeners by cloning and replacing
        const newContentDisplay = domElements.contentDisplay.cloneNode(true);
        domElements.contentDisplay.parentNode.replaceChild(newContentDisplay, domElements.contentDisplay);
        domElements.contentDisplay = newContentDisplay;
        
        // Add scroll event listener
        domElements.contentDisplay.addEventListener('scroll', function() {
            const scrollHeight = this.scrollHeight - this.clientHeight;
            const scrollTop = this.scrollTop;
            
            // Handle edge case where scrollHeight is 0
            if (scrollHeight <= 0) {
                domElements.readingProgress.textContent = '100%';
                return;
            }
            
            // Calculate progress percentage (capped at 100%)
            const readingProgress = Math.min(Math.round((scrollTop / scrollHeight) * 100), 100);
            domElements.readingProgress.textContent = `${readingProgress}%`;
        });
    }
}

// Update module statuses based on progress
function updateModuleStatuses(progress) {
    const moduleCards = document.querySelectorAll('.module-card');
    
    moduleCards.forEach(card => {
        const moduleId = parseInt(card.dataset.moduleId);
        const statusElement = card.querySelector('.module-status');
        const buttonElement = card.querySelector('.start-module-btn');
        
        if (!statusElement || !buttonElement) return;
        
        // Check if module is completed (we still track completion)
        const isCompleted = progress.completedModules >= moduleId;
        
        // All modules are now always unlocked
        makeModuleAccessible(card, statusElement, buttonElement, isCompleted);
    });
}

// Make all modules accessible (replacing updateModuleCardStatus)
function makeModuleAccessible(card, statusElement, buttonElement, isCompleted) {
    // Remove locked class from all cards
    card.classList.remove('locked');
    
    // Update icon
    const iconElement = card.querySelector('.fas.fa-lock');
    if (iconElement) {
        iconElement.className = isCompleted ? 'fas fa-check-circle' : 'fas fa-book';
    }
    
    // Create a new button to ensure clean event listeners
    const newButton = buttonElement.cloneNode(true);
    buttonElement.parentNode.replaceChild(newButton, buttonElement);
    
    // Get module information
    const moduleId = parseInt(card.dataset.moduleId);
    const core = card.dataset.core;
    
    if (isCompleted) {
        // Module is completed
        statusElement.textContent = 'Completed';
        statusElement.style.background = '#e6ffee';
        statusElement.style.color = '#2ecc71';
        card.classList.add('completed');
        newButton.textContent = 'Review Module';
    } else {
        // Module is available
        statusElement.textContent = 'Available';
        statusElement.style.background = '#e6f7ff';
        statusElement.style.color = '#0088cc';
        card.classList.remove('completed');
        newButton.textContent = 'Start Module';
    }
    
    // All buttons are enabled
    newButton.disabled = false;
    
    // Add click event listener to all modules
    newButton.addEventListener('click', function() {
        console.log(`Opening module ${moduleId} from core ${core}`);
        displayModuleContent(core, moduleId);
    });
}

// Load user progress from localStorage
function loadUserProgress() {
    const savedProgress = localStorage.getItem('userProgress');
    
    if (savedProgress) {
        try {
            return JSON.parse(savedProgress);
        } catch (error) {
            console.error('Error parsing saved progress:', error);
            return getDefaultProgress();
        }
    } else {
        return getDefaultProgress();
    }
}

// Get default progress object
function getDefaultProgress() {
    return {
        completedModules: 0,
        quizzesPassed: 0,
        pointsEarned: 0,
        moduleStatus: {}
    };
}

// Save user progress to localStorage
function saveUserProgress(progress) {
    try {
        localStorage.setItem('userProgress', JSON.stringify(progress));
        
        // Update UI elements with new progress
        updateProgressUI(progress);
        
        // Sync with index page if applicable
        syncProgressWithHomePage(progress);
    } catch (error) {
        console.error('Error saving progress:', error);
    }
}

// Update UI elements with current progress
function updateProgressUI() {
    console.log("Learning.js updateProgressUI called");
    if (window.ProgressTracker) {
        window.ProgressTracker.updateUI();
    } else {
        console.error("ProgressTracker not available for updating UI!");
    }
}

// Sync progress with the home page if needed
function syncProgressWithHomePage(progress) {
    // This function can be expanded to update progress bars on other pages if needed
    const progressPercentage = Math.round((progress.completedModules / totalModules) * 100);
    
    // Update home page progress bar if it exists on this page
    const homeProgressBar = document.querySelector('.home-progress-bar-fill');
    const homeProgressPercentage = document.querySelector('.home-progress-percentage');
    
    if (homeProgressBar) homeProgressBar.style.width = `${progressPercentage}%`;
    if (homeProgressPercentage) homeProgressPercentage.textContent = `${progressPercentage}%`;
}

// Mark a module as complete
function completeModule(moduleId) {
    console.log(`Learning.js completeModule called for ${moduleId}`);
    if (window.ProgressTracker) {
        const success = window.ProgressTracker.completeModule(moduleId);
        if (success) {
            // Update the UI
            const moduleCard = document.querySelector(`.module-card[data-module-id="${moduleId}"]`);
            if (moduleCard) {
                const statusElement = moduleCard.querySelector('.module-status');
                const buttonElement = moduleCard.querySelector('.start-module-btn');
                
                if (statusElement && buttonElement) {
                    markModuleCardAsCompleted(moduleCard, statusElement, buttonElement);
                }
            }
            return true;
        }
        return false;
    } else {
        console.error("ProgressTracker not available! Progress won't be saved.");
        return false;
    }
}

// Mark module as completed
function completeCurrentModule() {
    // Check if we have a current module selected
    if (!currentModuleId) {
        console.error("No current module selected");
        return;
    }
    
    // Call the completeModule function
    if (completeModule(currentModuleId)) {
        // Show success message
        const notification = document.createElement('div');
        notification.className = 'notification success';
        notification.textContent = 'Module completed successfully!';
        document.body.appendChild(notification);
        setTimeout(() => notification.remove(), 3000);
        
        // Update UI elements
        const moduleCard = document.querySelector(`.module-card[data-module-id="${currentModuleId}"]`);
        if (moduleCard && !moduleCard.classList.contains('completed')) {
            moduleCard.classList.add('completed');
        }
        
        // Enable next module if exists
        const nextModuleId = currentModuleId + 1;
        const nextModuleCard = document.querySelector(`.module-card[data-module-id="${nextModuleId}"]`);
        if (nextModuleCard) {
            const statusElement = nextModuleCard.querySelector('.module-status');
            const buttonElement = nextModuleCard.querySelector('.start-module-btn');
            
            if (statusElement && buttonElement) {
                updateModuleCardStatus(nextModuleCard, statusElement, buttonElement, true, false);
            }
        }
        
        // Return to module selection
        if (domElements.contentSection && domElements.selectionSection) {
            domElements.contentSection.style.display = 'none';
            domElements.selectionSection.style.display = 'block';
        }
    }
}

// Helper functions
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getCoreIcon(core) {
    const icons = {
        identify: 'search',
        govern: 'gavel',
        control: 'sliders-h',
        communicate: 'comment',
        protect: 'shield-alt'
    };
    
    return icons[core] || 'circle';
}

function getCoreDescription(core) {
    const descriptions = {
        identify: 'Develop the organizational understanding to manage privacy risk for individuals arising from data processing.',
        govern: 'Develop and implement the organizational governance structure to enable ongoing privacy risk management.',
        control: 'Develop and implement appropriate controls to enable data processing in accordance with privacy policies.',
        communicate: 'Develop and implement mechanisms to inform individuals and obtain consent for data processing.',
        protect: 'Develop and implement safeguards to protect the confidentiality, integrity, and availability of personal data.'
    };
    
    return descriptions[core] || '';
}