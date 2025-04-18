# Diagnostic Screener Application

A React-based frontend application for administering diagnostic health screeners to patients.

## Running the Application Locally

#### Prerequisites

- Node.js (v16+)
- npm or yarn

#### Installation Steps

Clone the project

```bash
  git clone https://github.com/codezilla322/diagnostic-screener-ui.git
```

Go to the project directory

```bash
  cd diagnostic-screener-ui
```

Install dependencies

```bash
  npm install
```

Start the development server

```bash
  npm run dev
```

Open your browser and navigate to

```bash
http://localhost:5173/
```

## Problem and Solution

### Problem

Create a patient-facing diagnostic screener interface that:

- Displays assessment questions one at a time
- Tracks patient responses
- Shows progress through the assessment
- Prepares data for backend submission

### Solution

I built a React-based application using TypeScript and TailwindCSS that implements:

- A step-by-step question flow that guides patients through the diagnostic assessment
- Visual progress indicators showing completion status
- Clean transitions between questions
- Data collection for all responses
- A comprehensive results summary upon completion

The application follows clean architecture principles and employs several design patterns to ensure the code is maintainable, scalable, and extensible.

## Technical Choices

### Architecture

I implemented a layered architecture following established design patterns:

- **UI Layer**: React components organized by responsibility
- **State Management**: Context API for centralized state
- **Service Layer**: For handling API interactions
- **Type System**: TypeScript interfaces for consistent data structures

### Design Patterns

- **Provider Pattern**: For dependency injection and state management
- **Container/Presentational Pattern**: Separating logic from presentation
- **Service Pattern**: Abstracting data fetching and submission
- **Component Pattern**: Building reusable UI elements
- **Strategy Pattern**: For different styling strategies

### Technology Stack

- **React**: For building a component-based UI
- **TypeScript**: For type safety and better developer experience
- **TailwindCSS**: For rapid styling with consistency
- **Context API**: For state management without additional libraries

### Benefits of These Choices

- **Maintainability**: Separation of concerns makes the code easier to maintain
- **Scalability**: The architecture allows for adding new features without major refactoring
- **Testability**: Components and services can be tested in isolation
- **Performance**: Optimized rendering through proper component composition
- **Developer Experience**: Strong typing and clear responsibilities improve development workflow

## Production Deployment Strategy

### Hosting Platform

I would deploy this application on AWS using a combination of services:

- **Frontend**: AWS Amplify or S3 + CloudFront for static hosting
- **Backend**: AWS ECS or Lambda for API functionality
- **Database**: Aurora RDS for patient data with proper encryption

### Ensuring High Availability

- **Multi-AZ Deployment**: Distribute across multiple availability zones
- **Auto-scaling**: Configure auto-scaling groups based on traffic patterns
- **Content Delivery Network**: Use CloudFront to cache and serve content globally
- **Load Balancing**: Implement application load balancers to distribute traffic
- **Database Redundancy**: Use RDS with Multi-AZ configuration and read replicas

## Performance Optimization

- **Code Splitting**: Lazy load components not needed for initial render
- **Asset Optimization**: Minify and compress static assets
- **Caching Strategies**: Implement appropriate cache headers
- **Performance Monitoring**: Use tools like AWS CloudWatch and Application Insights
- **Database Indexing**: Optimize database queries with proper indexing

## Security Measures

- **HTTPS**: Enforce HTTPS-only communication
- **Authentication**: Implement OAuth 2.0 or SAML for user authentication
- **Authorization**: Role-based access control for different user types
- **Data Encryption**: Encrypt sensitive patient data at rest and in transit
- **Input Validation**: Client and server-side validation to prevent attacks
- **HIPAA Compliance**: Ensure all services are configured for HIPAA compliance
- **Regular Security Audits**: Scheduled security assessments
- **WAF**: Implement AWS WAF to protect against common web exploits

## Monitoring and Troubleshooting

- **Centralized Logging**: AWS CloudWatch Logs for aggregating logs
- **Application Performance Monitoring**: New Relic or DataDog for real-time insights
- **Error Tracking**: Sentry for capturing and analyzing frontend errors
- **User Session Recordings**: Tools like Hotjar to understand user issues
- **Health Checks**: Regular endpoint monitoring for availability
- **Alerting**: Set up alerts for unusual patterns or errors
- **Analytics**: Implement analytics to track user flows and identify bottlenecks
- **CI/CD Pipeline Monitoring**: Track deployment success and failures

## CI/CD Pipeline

- **Jenkins / GitHub Actions**: For automated testing and deployment
- **Infrastructure as Code**: Use AWS CDK or Terraform to version infrastructure
- **Blue/Green Deployments**: Minimize downtime during updates
- **Feature Flags**: For controlled feature rollouts
- **Automated Testing**: Unit, integration, and E2E tests as part of pipeline

## Trade-offs and Future Improvements

### Current Trade-offs

- **Mock Service vs. Real API**: Currently using a mock service for data, which simplifies development but doesn't test actual API integration **(Although, with the help of dependency injection and lose coupling the mock service can be switched out easily with an api service without a rewrite required due to the extensibility of the code)**
- **Limited Question Types**: The current implementation assumes a standard question format
- **Local State Management**: Using Context API which works well for this size application but might need reconsideration at larger scale

### Future Improvements

- **Offline Support**: Implement service workers for offline completion of assessments
- **Accessibility Improvements**: Enhance keyboard navigation and screen reader support
- **Advanced Question Types**: Support for different question formats (multiple choice, slider-based, etc.)
- **Response Persistence**: Save partial responses to allow resuming incomplete assessments
- **Better Animation**: More refined transitions between questions
- **Multilingual Support**: Framework for supporting multiple languages
- **Enhanced Analytics**: Track completion rates and identify difficult questions
- **Mobile Optimization**: Specific optimizations for mobile experience

### What I Would Add With More Time

- **Comprehensive Test Suite**: Unit and integration tests for all components
- **Component Documentation**: Storybook for interactive component documentation
- **Theme Customization**: Allow for white-labeling or theming
- **Containerization**: Containerize the application with Docker and Kubernetes
