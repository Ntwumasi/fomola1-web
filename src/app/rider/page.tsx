import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  DollarSign, 
  Clock, 
  Heart, 
  Shield, 
  Star, 
  Users,
  CheckCircle,
  FileText,
  Phone,
  CreditCard
} from 'lucide-react'
import Link from 'next/link'

export default function RiderPage() {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Earn Good Money',
      description: 'Make up to GH₵ 2,000+ per month with flexible working hours'
    },
    {
      icon: Clock,
      title: 'Flexible Schedule',
      description: 'Work when you want. Set your own hours and take breaks whenever you need'
    },
    {
      icon: Heart,
      title: 'Health Benefits',
      description: 'Free health check-ups every 3 months after completing 12 months of service'
    },
    {
      icon: Star,
      title: 'Performance Bonuses',
      description: 'Monthly bonuses and airtime rewards based on your performance and activity'
    },
    {
      icon: CreditCard,
      title: 'Motorbike Loans',
      description: 'Access to motorbike loan programs after 12 months of consistent service'
    },
    {
      icon: Shield,
      title: 'Insurance Coverage',
      description: 'Comprehensive insurance coverage for accidents, theft, and other incidents'
    }
  ]

  const requirements = [
    'Valid Ghana Card (National ID)',
    'Valid motorbike license',
    'Own or have access to a motorbike',
    'Smartphone with internet access',
    'Age 18-50 years',
    'Basic literacy (read and write)',
    'Clean background check',
    'Motorbike registration papers'
  ]

  const onboardingSteps = [
    {
      step: 1,
      icon: Phone,
      title: 'Download & Register',
      description: 'Download the Fomola1 Rider app and create your account with basic information'
    },
    {
      step: 2,
      icon: FileText,
      title: 'Submit Documents',
      description: 'Upload your ID, license, photo, and motorbike papers for verification'
    },
    {
      step: 3,
      icon: Shield,
      title: 'Background Check',
      description: 'We conduct a thorough background screening for safety and security'
    },
    {
      step: 4,
      icon: Users,
      title: 'Training & Orientation',
      description: 'Attend our orientation session to learn about the platform and best practices'
    },
    {
      step: 5,
      icon: CheckCircle,
      title: 'Start Earning',
      description: 'Once approved, go online and start accepting delivery requests'
    }
  ]

  const earnings = [
    { category: 'Standard Deliveries', commission: '80%', example: 'GH₵ 12 per delivery' },
    { category: 'Express Deliveries', commission: '80%', example: 'GH₵ 20 per delivery' },
    { category: 'Long Distance', commission: '80%', example: 'GH₵ 25+ per delivery' },
    { category: 'Monthly Bonus', commission: '100%', example: 'Up to GH₵ 200' }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-secondary-900 mb-6">
                Become a
                <span className="text-primary-500 block">Fomola1 Rider</span>
              </h1>
              <p className="text-xl text-secondary-600 mb-8">
                Join our community of verified riders and earn money delivering packages 
                across Accra with flexible hours and great benefits.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/register">
                  <Button size="lg" className="w-full sm:w-auto">
                    Start Application
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Download Rider App
                </Button>
              </div>
              <p className="text-sm text-secondary-500 mt-4">
                Already registered? <Link href="/login" className="text-primary-600 hover:text-primary-500">Sign in here</Link>
              </p>
            </div>
            <div className="relative">
              <div className="bg-primary-500 rounded-3xl p-8 transform -rotate-3">
                <div className="bg-white rounded-2xl p-8 transform rotate-6">
                  <div className="text-center">
                    <div className="text-5xl mb-4">🏍️</div>
                    <h3 className="text-xl font-semibold text-secondary-900 mb-2">Join 500+ Riders</h3>
                    <p className="text-secondary-600">Earning money across Accra</p>
                    <div className="mt-4 flex justify-center space-x-1">
                      {[1,2,3,4,5].map((i) => (
                        <Star key={i} className="h-4 w-4 fill-primary-400 text-primary-400" />
                      ))}
                    </div>
                    <p className="text-sm text-secondary-600 mt-1">4.8/5 Rider Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Why Ride with Fomola1?
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              We take care of our riders with competitive pay, flexible hours, and comprehensive benefits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <Card key={index} className="border-2 border-secondary-100 hover:border-primary-500 transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-primary-600" />
                    </div>
                    <CardTitle>{benefit.title}</CardTitle>
                    <CardDescription>{benefit.description}</CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Earnings Section */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              How Much Can You Earn?
            </h2>
            <p className="text-lg text-secondary-600">
              Transparent commission structure with multiple earning opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2 border-primary-200">
              <CardHeader>
                <CardTitle className="text-center">Earnings Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {earnings.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-secondary-100 last:border-b-0">
                      <div>
                        <p className="font-medium text-secondary-900">{item.category}</p>
                        <p className="text-sm text-secondary-600">You keep {item.commission}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-primary-600">{item.example}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary-200">
              <CardHeader>
                <CardTitle className="text-center">Weekly Potential</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-6">
                  <div>
                    <p className="text-sm text-secondary-600">Part-time (20 deliveries/week)</p>
                    <p className="text-3xl font-bold text-primary-600">GH₵ 300+</p>
                  </div>
                  <div>
                    <p className="text-sm text-secondary-600">Full-time (50 deliveries/week)</p>
                    <p className="text-3xl font-bold text-primary-600">GH₵ 750+</p>
                  </div>
                  <div>
                    <p className="text-sm text-secondary-600">Peak hours bonus</p>
                    <p className="text-3xl font-bold text-primary-600">+20%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-secondary-600">
              * Earnings vary based on location, time, and number of deliveries completed
            </p>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Requirements to Join
            </h2>
            <p className="text-lg text-secondary-600">
              Make sure you meet these basic requirements before applying
            </p>
          </div>

          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-secondary-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Onboarding Process */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              How to Get Started
            </h2>
            <p className="text-lg text-secondary-600">
              Simple 5-step process to become a verified Fomola1 rider
            </p>
          </div>

          <div className="space-y-8">
            {onboardingSteps.map((item, index) => {
              const IconComponent = item.icon
              return (
                <Card key={index} className="border-2 border-white shadow-sm">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                          {item.step}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <IconComponent className="h-6 w-6 text-primary-600" />
                          <h3 className="text-xl font-semibold text-secondary-900">{item.title}</h3>
                        </div>
                        <p className="text-secondary-600">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Earning?
          </h2>
          <p className="text-xl text-secondary-300 mb-8">
            Join hundreds of riders already earning money with flexible delivery work
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="w-full sm:w-auto">
                Apply Now - It&apos;s Free
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-secondary-900">
              Download Rider App
            </Button>
          </div>
          <p className="text-secondary-400 text-sm mt-6">
            Questions? Call us at +233 XX XXX XXXX or email riders@fomola1.com
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}