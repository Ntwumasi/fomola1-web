import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Clock, Shield, Zap, MapPin, Star, Users } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-secondary-900 mb-6">
                Fast, Reliable
                <span className="text-primary-500 block">Delivery Service</span>
              </h1>
              <p className="text-xl text-secondary-600 mb-8">
                Connect with verified Okada riders across Accra for quick, affordable deliveries. 
                Your package, delivered with speed and care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/send">
                  <Button size="lg" className="w-full sm:w-auto">
                    Send a Package
                  </Button>
                </Link>
                <Link href="/track">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Track Delivery
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-primary-500 rounded-3xl p-8 transform rotate-3">
                <div className="bg-white rounded-2xl p-6 transform -rotate-6">
                  <div className="text-center">
                    <div className="text-4xl mb-4">🏍️</div>
                    <h3 className="text-lg font-semibold text-secondary-900">Fast Delivery</h3>
                    <p className="text-secondary-600">Average delivery time: 30 mins</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Why Choose Fomola1?
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Experience the fastest and most reliable delivery service in Accra
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-secondary-100 hover:border-primary-500 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary-600" />
                </div>
                <CardTitle>Lightning Fast</CardTitle>
                <CardDescription>
                  Average delivery time of 30 minutes within Accra
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-secondary-100 hover:border-primary-500 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary-600" />
                </div>
                <CardTitle>Verified Riders</CardTitle>
                <CardDescription>
                  All riders undergo background checks and document verification
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-secondary-100 hover:border-primary-500 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-primary-600" />
                </div>
                <CardTitle>Real-time Tracking</CardTitle>
                <CardDescription>
                  Track your package from pickup to delivery in real-time
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-secondary-100 hover:border-primary-500 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-primary-600" />
                </div>
                <CardTitle>24/7 Service</CardTitle>
                <CardDescription>
                  Available round the clock for your delivery needs
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-secondary-100 hover:border-primary-500 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-primary-600" />
                </div>
                <CardTitle>Rated Service</CardTitle>
                <CardDescription>
                  Rate your delivery experience and help improve our service
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-secondary-100 hover:border-primary-500 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary-600" />
                </div>
                <CardTitle>Community Driven</CardTitle>
                <CardDescription>
                  Supporting local Okada riders and strengthening communities
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">500+</div>
              <div className="text-lg text-secondary-600">Verified Riders</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">10K+</div>
              <div className="text-lg text-secondary-600">Deliveries Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">4.8</div>
              <div className="text-lg text-secondary-600">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience Fast Delivery?
          </h2>
          <p className="text-xl text-secondary-300 mb-8">
            Join thousands of satisfied customers who trust Fomola1 for their delivery needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/send">
              <Button size="lg" className="w-full sm:w-auto">
                Send Package Now
              </Button>
            </Link>
            <Link href="/rider">
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-secondary-900">
                Become a Rider
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
