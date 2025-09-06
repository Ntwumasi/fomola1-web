import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Check, Clock, Zap, Calendar } from 'lucide-react'
import Link from 'next/link'

export default function PricingPage() {
  const pricingPlans = [
    {
      id: 'standard',
      name: 'Standard Delivery',
      icon: Clock,
      time: '30-45 mins',
      description: 'Perfect for everyday deliveries',
      basePrice: 15,
      features: [
        'Real-time tracking',
        'SMS notifications',
        'Basic insurance coverage',
        'Standard support',
        'Photo confirmation'
      ],
      popular: false
    },
    {
      id: 'express',
      name: 'Express Delivery',
      icon: Zap,
      time: '15-25 mins',
      description: 'For urgent deliveries',
      basePrice: 25,
      features: [
        'Priority rider assignment',
        'Real-time tracking',
        'SMS + call notifications',
        'Enhanced insurance',
        'Priority support',
        'Photo + signature confirmation'
      ],
      popular: true
    },
    {
      id: 'scheduled',
      name: 'Scheduled Delivery',
      icon: Calendar,
      time: 'Choose time',
      description: 'Plan your deliveries ahead',
      basePrice: 15,
      features: [
        'Schedule up to 7 days ahead',
        'Real-time tracking',
        'SMS notifications',
        'Basic insurance coverage',
        'Standard support',
        'Photo confirmation'
      ],
      popular: false
    }
  ]

  const distancePricing = [
    { range: '0-5 km', price: 'Base rate' },
    { range: '5-10 km', price: '+GH₵ 5' },
    { range: '10-15 km', price: '+GH₵ 12' },
    { range: '15+ km', price: '+GH₵ 20' }
  ]

  const packageTypes = [
    { type: 'Documents', weight: 'Under 1kg', surcharge: 'No surcharge' },
    { type: 'Food', weight: '1-3kg', surcharge: 'No surcharge' },
    { type: 'Electronics', weight: '1-5kg', surcharge: '+GH₵ 3' },
    { type: 'Clothing', weight: '1-5kg', surcharge: 'No surcharge' },
    { type: 'Heavy Items', weight: '5-10kg', surcharge: '+GH₵ 8' }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-secondary-600 mb-8">
            No hidden fees. Pay only for what you need. Get instant quotes for all your deliveries.
          </p>
          <Link href="/send">
            <Button size="lg">
              Get Instant Quote
            </Button>
          </Link>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Choose Your Delivery Speed
            </h2>
            <p className="text-lg text-secondary-600">
              Select the delivery option that best fits your timeline and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => {
              const IconComponent = plan.icon
              return (
                <Card 
                  key={plan.id} 
                  className={`relative border-2 ${
                    plan.popular 
                      ? 'border-primary-500 shadow-lg' 
                      : 'border-secondary-200'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 mx-auto rounded-lg flex items-center justify-center mb-4 ${
                      plan.popular ? 'bg-primary-500' : 'bg-secondary-100'
                    }`}>
                      <IconComponent className={`h-8 w-8 ${
                        plan.popular ? 'text-white' : 'text-secondary-600'
                      }`} />
                    </div>
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                    <CardDescription className="text-secondary-600">
                      {plan.description}
                    </CardDescription>
                    <div className="mt-4">
                      <span className="text-3xl font-bold text-secondary-900">
                        GH₵ {plan.basePrice}
                      </span>
                      <span className="text-secondary-600 ml-1">starting from</span>
                      <p className="text-sm text-primary-600 mt-1">{plan.time}</p>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-secondary-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link href="/send" className="block mt-6">
                      <Button 
                        className="w-full" 
                        variant={plan.popular ? "default" : "outline"}
                      >
                        Choose {plan.name}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing Factors */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              How We Calculate Your Fare
            </h2>
            <p className="text-lg text-secondary-600">
              Our transparent pricing is based on distance, package type, and delivery speed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Distance Pricing */}
            <Card>
              <CardHeader>
                <CardTitle>Distance-Based Pricing</CardTitle>
                <CardDescription>
                  Fair pricing based on delivery distance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {distancePricing.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-secondary-100 last:border-b-0">
                      <span className="text-secondary-700">{item.range}</span>
                      <span className="font-semibold text-secondary-900">{item.price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Package Types */}
            <Card>
              <CardHeader>
                <CardTitle>Package Type Surcharges</CardTitle>
                <CardDescription>
                  Additional fees based on package type and weight
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {packageTypes.map((item, index) => (
                    <div key={index} className="py-2 border-b border-secondary-100 last:border-b-0">
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-secondary-900 font-medium">{item.type}</span>
                          <p className="text-sm text-secondary-600">{item.weight}</p>
                        </div>
                        <span className={`font-semibold ${
                          item.surcharge === 'No surcharge' 
                            ? 'text-green-600' 
                            : 'text-secondary-900'
                        }`}>
                          {item.surcharge}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <div className="mt-12 bg-white rounded-lg p-8">
            <h3 className="text-xl font-semibold text-secondary-900 mb-4">Additional Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-secondary-700">
              <div>
                <h4 className="font-semibold text-secondary-900 mb-2">Payment Methods</h4>
                <ul className="space-y-1">
                  <li>• Mobile Money (MTN, Vodafone, AirtelTigo)</li>
                  <li>• Credit/Debit Cards</li>
                  <li>• Bank Transfer</li>
                  <li>• Cash on Pickup (coming soon)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-secondary-900 mb-2">Delivery Areas</h4>
                <ul className="space-y-1">
                  <li>• Greater Accra Region</li>
                  <li>• Tema and surrounding areas</li>
                  <li>• Airport and surrounding areas</li>
                  <li>• Expanding to other regions soon</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Send Your Package?
          </h2>
          <p className="text-xl text-secondary-300 mb-8">
            Get an instant quote and book your delivery in just a few clicks
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/send">
              <Button size="lg" className="w-full sm:w-auto">
                Get Quote & Book Now
              </Button>
            </Link>
            <Link href="/track">
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-secondary-900">
                Track Existing Order
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}