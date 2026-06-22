import { GitHubIcon, LinkedInIcon } from '@/components/icons'

export const RESUME_DATA = {
	name: 'Narayana N Gourav',
	initials: 'NG',
	resumeFileName: 'NarayanaNGourav-SoftwareDeveloper.txt',
	yearsExperience: '2+',
	location: 'Greater Bengaluru Area',
	locationLink: 'https://www.google.com/maps/place/Bengaluru',
	about:
		'Software Developer with 2+ years of experience building reliable full-stack systems and cloud-native products.',
	summary:
		'I turn systems that work in demos into dependable products that hold up in production. My recent work spans serverless operations tooling, PostgreSQL data pipelines, authentication at scale, offline reliability, and automated release analysis.',
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
	achievements: [
		{
			title: 'Best Project Award',
			description: 'Recognized for delivering an outstanding software project.',
			year: ''
		},
		{
			title: 'Research Publication',
			description:
				'“Improving The Performance of An Advanced Algorithm for Task flow Scheduling In Cloud Computing.”',
			year: ''
		}
	],
	certifications: [
		'Python (Basic) Certificate',
		'Introduction to Python',
		'Java (Basic)',
		'Crash Course on Python',
		'Windows Server Management and Security'
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
		'TypeScript',
		'JavaScript',
		'SQL',
		'React',
		'Flask',
		'Jinja2',
		'Pandas',
		'OpenPyXL',
		'VBA',
		'IntelliJ IDEA',
		'CloudSim',
		'Docker',
		'Kubernetes',
		'GitHub Actions',
		'Git',
		'AWS',
		'MongoDB',
		'PostgreSQL',
		'Serverless Functions',
		'RPC APIs',
		'REST APIs',
		'Microservices',
		'Robocopy',
		'JSON Configuration'
	],
	projects: [
		{
			title: 'Chimple Serverless Operations Console',
			techStack: ['TypeScript', 'React', 'PostgreSQL', 'RPC APIs', 'REST APIs'],
			description:
				'Architected a serverless operations console for real-time production data visibility and lower interaction latency.',
			link: {
				label: 'chimple.org',
				href: 'https://www.chimple.org/'
			}
		},
		{
			title: 'Zero-Failure Database Migration Pipeline',
			techStack: ['PostgreSQL', 'GitHub Actions', 'SQL'],
			description:
				'Automated repeatable database migration from development to production with no manual intervention.',
			link: {
				label: 'chimple.org',
				href: 'https://www.chimple.org/'
			}
		},
		{
			title: 'Production Authentication Pipeline',
			techStack: ['Serverless Functions', 'REST APIs', 'PostgreSQL'],
			description:
				'Built authentication and onboarding pipelines that moved 5,000+ users into production reliably.',
			link: {
				label: 'chimple.org',
				href: 'https://www.chimple.org/'
			}
		},
		{
			title: 'Polyspace Release Automation',
			techStack: ['Python', 'OpenPyXL', 'VBA', 'Robocopy'],
			description:
				'Automated static-analysis reports, macro execution, artifact packaging, and shared-drive publishing across tool versions.',
			link: {
				label: 'github.com/narayanangourav',
				href: 'https://github.com/narayanangourav/'
			}
		},
		{
			title: 'GitHub Enterprise Analytics Platform',
			techStack: ['Flask', 'MongoDB', 'Pandas', 'Jinja2', 'GitHub REST API'],
			description:
				'Created traceable cross-repository release analysis with dependency comparison and downloadable Excel reports.',
			link: {
				label: 'github.com/narayanangourav',
				href: 'https://github.com/narayanangourav/'
			}
		}
	]
}
