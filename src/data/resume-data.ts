import { GitHubIcon, LinkedInIcon } from '@/components/icons'

export const RESUME_DATA = {
	name: 'Narayana N Gourav',
	initials: 'NG',
	resumeFileName: 'NarayanaNGourav-SoftwareDeveloper.txt',
	yearsExperience: '2+',
	location: 'Greater Bengaluru Area',
	locationLink: 'https://www.google.com/maps/place/Bengaluru',
	about:
		"Most software systems don't fail because of bad ideas - they fail because they can't scale when it matters most.",
	summary:
		"Most software systems don't fail because of bad ideas - they fail because they can't scale when it matters most.\n\nI'm Narayana, a Software Engineer with 2+ years of experience building full-stack systems and cloud-native solutions that hold up under real pressure.\n\nThe problem I keep solving? Products that work in demos but break in production. At Chimple Learning, I inherited an app with 100K+ downloads and a growing user base - and the infrastructure wasn't keeping pace. Data pipelines were fragile, SQL queries were slow, and onboarding was leaking users.\n\nSo I got to work.\n\nI architected a serverless operations console using RPC and REST APIs that brought real-time data visibility to the team. I rebuilt the database migration pipeline from scratch - zero failures, fully automated via GitHub Actions. I optimized SQL queries and data flows to cut load times. I built authentication pipelines that onboarded 5,000+ users without a hitch. And I helped push application uptime for a system serving users across low-connectivity environments.\n\nBefore that, at Continental AM, I automated project dependency analysis using Python and GitHub APIs - cutting manual effort by 70%. I also reduced Polyspace reporting time by 80% through custom automation scripts. Small numbers, big impact on engineering hours.\n\nI work across Python, Java, React, Docker, Kubernetes, AWS, and more - but what I care about most is that the system actually works when real users hit it.\n\nI use OpenAI and Codex-assisted development workflows to accelerate requirement analysis, debugging, refactoring, test-case generation, documentation, and code review support while validating output through manual review, testing, and production-safe engineering practices.",
	avatar: '/assets/avatar.jpg',
	personalWebsiteUrl: {
		name: 'GitHub',
		url: 'https://github.com/narayanangourav/'
	},
	contact: {
		link: {
			name: 'LinkedIn',
			url: 'https://linkedin.com/in/narayana-n-gourav'
		},
		email: {
			name: 'Email',
			at: 'narayana.n.gourav@gmail.com'
		},
		social: [
			{
				name: 'GitHub',
				url: 'https://github.com/narayanangourav/',
				icon: GitHubIcon
			},
			{
				name: 'LinkedIn',
				url: 'https://linkedin.com/in/narayana-n-gourav',
				icon: LinkedInIcon
			}
		]
	},
	education: [
		{
			school: 'Ramaiah Institute of Technology',
			degree: 'Master of Technology in Computer Science and Engineering',
			start: 'Feb 2023',
			end: 'Aug 2024',
			description: ['Bengaluru']
		},
		{
			school: 'Presidency University Bangalore',
			degree: 'Bachelor of Technology in Computer Science and Engineering',
			start: 'Aug 2018',
			end: 'Nov 2022',
			description: ['Bengaluru']
		}
	],
	work: [
		{
			company: 'Chimple Learning',
			badges: ['Bengaluru'],
			jobs: [
				{
					title: 'Software Developer',
					start: 'Jul 2025',
					end: 'Present',
					description: [
						'Enhanced an educational mobile application with 100K+ Google Play downloads across feature engineering, architecture, and performance optimization.',
						'Architected a serverless operations console using RPC and REST APIs for real-time data visibility and production-ready data pipelines.',
						'Engineered a zero-failure PostgreSQL migration pipeline from development to production with end-to-end GitHub Actions automation.',
						'Optimized SQL queries and data flows to reduce load times and strengthen offline reliability in low-connectivity environments.',
						'Built serverless authentication pipelines that onboarded 5,000+ production users while improving activation and retention flows.',
						'Used OpenAI and Codex-assisted workflows at Chimple for requirement breakdown, debugging, refactoring, test-case preparation, documentation, and code review support, with final validation through manual review and testing.',
						'Resolved critical synchronization bugs and edge cases, improving application stability and uptime.'
					]
				},
				{
					title: 'Associate Software Developer',
					start: 'Jan 2025',
					end: 'Jun 2025',
					description: [
						'Contributed to feature engineering, backend integration, and reliability improvements for Chimple Learning’s educational mobile platform.'
					]
				}
			]
		},
		{
			company: 'Continental',
			badges: ['Bengaluru'],
			jobs: [
				{
					title: 'Software Engineer Intern',
					start: 'Nov 2023',
					end: 'Oct 2024',
					description: [
						'Delivered a Python automation pipeline for Polyspace static-analysis releases and a Flask-based GitHub Enterprise analytics platform.',
						'Automated Polyspace report generation using OpenPyXL, win32com, VBA macros, Robocopy packaging, and shared-drive publishing.',
						'Integrated GitHub Enterprise REST APIs to extract commits, pull requests, Jira references, and dependency deltas, cutting release-impact analysis time by 80%.',
						'Built MongoDB-backed report persistence, Pandas/OpenPyXL exports, and recursive multi-level tag dependency comparison.',
						'Hardened both tools with structured logging, JSON configuration, error handling, retry logic, and a Jinja2 interface.'
					]
				}
			]
		}
	],
	publications: [
		{
			id: 'cloud-taskflow-scheduling',
			title:
				'Improving The Performance of An Advanced Algorithm for Task flow Scheduling In Cloud Computing',
			source: 'Seybold-Report',
			date: 'Apr 15, 2024',
			link: {
				label: 'Show publication',
				href: 'https://seybold-report.com/index.php/narayana-2/'
			},
			description: [
				'Developed and evaluated an advanced taskflow scheduling approach for cloud computing environments using Java and CloudSim.',
				'The project focused on improving the Max-Min scheduling algorithm to optimize cloud workflow execution, reduce makespan, improve response time, and increase resource utilization.',
				'The enhanced algorithm was benchmarked against traditional scheduling methods such as FCFS, SJF, and Round Robin, using performance metrics including makespan, throughput, average waiting time, and average response time.',
				'The results showed that the Improved Max-Min algorithm delivered better scheduling performance in most tested cases by dynamically allocating tasks based on workload requirements and available cloud resources.'
			]
		}
	],
	certifications: [
		{
			id: 'crash-course-on-python',
			title: 'Crash Course on Python',
			issuer: 'Coursera',
			link: {
				label: 'Show credential',
				href: 'https://www.coursera.org/account/accomplishments/certificate/KLGKSCULDNE6'
			},
			skills: [
				{
					name: 'Python'
				}
			]
		},
		{
			id: 'cybersecurity-toolkit',
			title: 'CYB003x: Building a Cybersecurity Toolkit',
			issuer: 'edX',
			link: {
				label: 'Show credential',
				href: 'https://courses.edx.org/certificates/4f5991968ffd491db9a9475e269e107b'
			},
			skills: [
				{
					name: 'Security',
					url: 'https://www.linkedin.com/in/narayana-n-gourav/overlay/1937006398/skill-associations-details/'
				}
			]
		},
		{
			id: 'windows-server-management-security',
			title: 'Windows Server Management and Security',
			issuer: 'Coursera',
			link: {
				label: 'Show credential',
				href: 'https://www.coursera.org/account/accomplishments/verify/5BS44SZVYUJQ'
			},
			skills: [
				{
					name: 'Windows',
					url: 'https://www.linkedin.com/in/narayana-n-gourav/overlay/2082524535/skill-associations-details/'
				},
				{
					name: 'Security',
					url: 'https://www.linkedin.com/in/narayana-n-gourav/overlay/2082524535/skill-associations-details/'
				}
			]
		}
	],
	awards: [
		{
			id: 'best-project-award',
			title: 'Best Project Award',
			issuer: 'Ramaiah Institute Of Technology, Alumni Association',
			date: 'May 2024',
			associatedWith: 'Ramaiah Institute Of Technology',
			description:
				'Received the Best Project Award from the Ramaiah Institute of Technology Alumni Association in May 2024 for the project "Enhancing workflow scheduling in cloud computing with a bio-inspired algorithm."',
			details: [
				'The project focused on improving cloud task scheduling using Java and CloudSim by optimizing resource allocation, reducing execution time, and improving workflow performance through an enhanced scheduling algorithm.'
			]
		}
	],
	languages: [
		'Telugu — Native or Bilingual',
		'English — Native or Bilingual',
		'Hindi — Native or Bilingual',
		'Kannada — Native or Bilingual'
	],
	skills: [
		'Python',
		'Java',
		'NodeJS',
		'TypeScript',
		'JavaScript',
		'SQL',
		'HTML/CSS',
		'Jinja',
		'VBA',
		'Shell Scripting (Bash)',
		'React',
		'Flask',
		'Android Studio',
		'Gradle',
		'Material UI',
		'Bulma',
		'Capacitor',
		'Sentry',
		'Jest',
		'Jenkins',
		'Maven',
		'SonarQube',
		'Trivy',
		'Nexus',
		'Docker',
		'Kubernetes (K8s)',
		'GitHub Actions',
		'Git',
		'AWS',
		'Prometheus',
		'Grafana',
		'Linux',
		'Apache Tomcat',
		'Unix',
		'Firebase',
		'Supabase',
		'MongoDB',
		'PostgreSQL',
		'MySQL',
		'SQLite',
		'Containerization',
		'REST APIs',
		'TDD',
		'SOLID Principles',
		'Clean Code',
		'Microservices',
		'OpenAI',
		'Codex',
		'prompt engineering',
		'debugging assistance',
		'code review support',
		'test-case generation',
		'documentation support',
		'log analysis',
		'refactoring support',
		'Project Management',
		'Problem Solving',
		'Agile Methodologies',
		'Cross-functional Collaboration'
	],
	projects: [
		{
			title: 'Chimple Serverless Operations Console',
			techStack: ['TypeScript', 'React', 'PostgreSQL', 'RPC APIs', 'REST APIs'],
			description:
				'Architected a serverless operations console for real-time production data visibility and lower interaction latency. Applied OpenAI and Codex-assisted development practices to compare implementation approaches, debug issues, generate edge-case test scenarios, and improve code/documentation quality.',
			link: {
				label: 'chimple.org',
				href: 'https://www.chimple.org/'
			}
		},
		{
			title: 'Zero-Failure Database Migration Pipeline',
			techStack: ['PostgreSQL', 'GitHub Actions', 'SQL'],
			description:
				'Automated repeatable database migration from development to production with no manual intervention. Applied OpenAI and Codex-assisted development practices to compare implementation approaches, debug issues, generate edge-case test scenarios, and improve code/documentation quality.',
			link: {
				label: 'chimple.org',
				href: 'https://www.chimple.org/'
			}
		},
		{
			title: 'Production Authentication Pipeline',
			techStack: ['Serverless Functions', 'REST APIs', 'PostgreSQL'],
			description:
				'Built authentication and onboarding pipelines that moved 5,000+ users into production reliably. Applied OpenAI and Codex-assisted development practices to compare implementation approaches, debug issues, generate edge-case test scenarios, and improve code/documentation quality.',
			link: {
				label: 'chimple.org',
				href: 'https://www.chimple.org/'
			}
		},
		{
			title: 'Polyspace Release Automation',
			techStack: ['Python', 'OpenPyXL', 'VBA', 'Robocopy'],
			description:
				'Automated static-analysis reports, macro execution, artifact packaging, and shared-drive publishing across tool versions. Applied OpenAI and Codex-assisted development practices to compare implementation approaches, debug issues, generate edge-case test scenarios, and improve code/documentation quality.',
			link: {
				label: 'github.com/narayanangourav',
				href: 'https://github.com/narayanangourav/'
			}
		},
		{
			title: 'GitHub Enterprise Analytics Platform',
			techStack: ['Flask', 'MongoDB', 'Pandas', 'Jinja2', 'GitHub REST API'],
			description:
				'Created traceable cross-repository release analysis with dependency comparison and downloadable Excel reports. Applied OpenAI and Codex-assisted development practices to compare implementation approaches, debug issues, generate edge-case test scenarios, and improve code/documentation quality.',
			link: {
				label: 'github.com/narayanangourav',
				href: 'https://github.com/narayanangourav/'
			}
		}
	]
}
