import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { X } from 'lucide-react';

interface ContactFormData {
  name: string;
  businessName: string;
  email: string;
  phone?: string;
  serviceInterest: string;
  message: string;
  consultation: boolean;
}

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService?: string;
}

const ContactModal = ({ isOpen, onClose, selectedService }: ContactModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<ContactFormData>({
    defaultValues: {
      consultation: false,
    },
  });

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Set service interest when provided
  useEffect(() => {
    if (selectedService) {
      setValue('serviceInterest', selectedService);
    }
  }, [selectedService, setValue]);

  const onSubmit = (data: ContactFormData) => {
    console.log('Form submitted:', data);
    // TODO: Connect to backend/automation
    alert("Thank you! We'll be in touch soon.");
    reset();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative max-w-4xl w-full bg-bg-card-dark border border-primary/50 rounded-xl shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-text-teal-gray hover:text-text-cream transition-colors"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Left Section - Illustration (hidden on mobile) */}
          <div className="hidden md:flex md:w-2/5 bg-bg-dark p-8 flex-col items-center justify-center text-center">
            {/* Placeholder Illustration */}
            <div className="aspect-square max-w-[250px] bg-gradient-to-br from-amber to-orange rounded-lg flex items-center justify-center mb-6">
              <div className="text-center p-6">
                <svg
                  className="mx-auto mb-4"
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                >
                  {/* Simple envelope icon */}
                  <rect
                    x="10"
                    y="20"
                    width="60"
                    height="40"
                    rx="4"
                    fill="white"
                    opacity="0.9"
                  />
                  <path
                    d="M10 25 L40 45 L70 25"
                    stroke="#CA6702"
                    strokeWidth="3"
                    fill="none"
                  />
                  {/* Friendly character face */}
                  <circle cx="40" cy="15" r="8" fill="white" opacity="0.9" />
                  <circle cx="37" cy="14" r="1.5" fill="#CA6702" />
                  <circle cx="43" cy="14" r="1.5" fill="#CA6702" />
                  <path
                    d="M37 17 Q40 19 43 17"
                    stroke="#CA6702"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </svg>
                <p className="text-white text-sm opacity-75">
                  Messenger Character
                </p>
              </div>
            </div>

            <h3 className="text-3xl font-bold text-text-cream mb-3">
              Get in Touch
            </h3>
            <p className="text-base text-text-teal-gray">
              We'd love to hear from you. Fill out the form and we'll get back to
              you shortly.
            </p>
          </div>

          {/* Right Section - Form */}
          <div className="w-full md:w-3/5 p-8 max-h-[90vh] overflow-y-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Name & Business Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-text-cream text-sm font-medium mb-2"
                  >
                    Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register('name', { required: 'Name is required' })}
                    className="w-full bg-bg-dark border border-primary/50 rounded-lg p-3 text-text-cream placeholder:text-text-teal-gray focus:ring-1 focus:ring-primary focus:outline-none"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Business Name */}
                <div>
                  <label
                    htmlFor="businessName"
                    className="block text-text-cream text-sm font-medium mb-2"
                  >
                    Business Name *
                  </label>
                  <input
                    id="businessName"
                    type="text"
                    {...register('businessName', {
                      required: 'Business name is required',
                    })}
                    className="w-full bg-bg-dark border border-primary/50 rounded-lg p-3 text-text-cream placeholder:text-text-teal-gray focus:ring-1 focus:ring-primary focus:outline-none"
                    placeholder="Your business"
                  />
                  {errors.businessName && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.businessName.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-text-cream text-sm font-medium mb-2"
                  >
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    className="w-full bg-bg-dark border border-primary/50 rounded-lg p-3 text-text-cream placeholder:text-text-teal-gray focus:ring-1 focus:ring-primary focus:outline-none"
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-text-cream text-sm font-medium mb-2"
                  >
                    Phone (optional)
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    {...register('phone')}
                    className="w-full bg-bg-dark border border-primary/50 rounded-lg p-3 text-text-cream placeholder:text-text-teal-gray focus:ring-1 focus:ring-primary focus:outline-none"
                    placeholder="+44 1234 567890"
                  />
                </div>
              </div>

              {/* Service Interest */}
              <div>
                <label
                  htmlFor="serviceInterest"
                  className="block text-text-cream text-sm font-medium mb-2"
                >
                  Service Interest *
                </label>
                <select
                  id="serviceInterest"
                  {...register('serviceInterest', {
                    required: 'Please select a service',
                  })}
                  className="w-full bg-bg-dark border border-primary/50 rounded-lg p-3 text-text-cream focus:ring-1 focus:ring-primary focus:outline-none"
                >
                  <option value="">Select a service</option>
                  <option value="Starter Forge">Starter Forge</option>
                  <option value="Master Forge">Master Forge</option>
                  <option value="Hive-Mind Waitlist">Hive-Mind Waitlist</option>
                </select>
                {errors.serviceInterest && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.serviceInterest.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-text-cream text-sm font-medium mb-2"
                >
                  Message / Project Description *
                </label>
                <textarea
                  id="message"
                  {...register('message', { required: 'Message is required' })}
                  rows={4}
                  className="w-full bg-bg-dark border border-primary/50 rounded-lg p-3 text-text-cream placeholder:text-text-teal-gray focus:ring-1 focus:ring-primary focus:outline-none resize-y min-h-[6rem]"
                  placeholder="Tell us about your project..."
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Consultation Checkbox */}
              <div className="flex items-center gap-2">
                <input
                  id="consultation"
                  type="checkbox"
                  {...register('consultation')}
                  className="h-5 w-5 rounded bg-bg-dark border-primary/50 text-primary focus:ring-1 focus:ring-primary"
                />
                <label
                  htmlFor="consultation"
                  className="text-text-cream text-sm"
                >
                  I'd like to schedule a consultation call
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary text-white font-bold py-3 px-4 rounded-lg hover:bg-primary-dark hover:scale-102 transition-all duration-200 mt-6"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
