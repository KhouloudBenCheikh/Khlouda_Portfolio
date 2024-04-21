import { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion'; // Assuming 'react-motion' was meant to be 'framer-motion'
import { fadeIn } from '../../variants';
import ParticlesContainer from '../../components/ParticlesContainer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, such as sending data to a server
    console.log(formData);
    // Reset form fields after submission if needed
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className='h-full bg-black'> {/* Changed background color to black */}
      {/* ParticlesContainer */}
      <ParticlesContainer className="absolute top-0 left-0 w-full h-full z-0" />
      
      {/* Form and content */}
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full relative z-10'>
        <div className='flex flex-col w-full max-w-[700px]'>
          <h2 className='h2 text-center mb-12'>
            Lets <span className='custom-text-color'>connect.</span>
          </h2>
          <form className='flex-1 flex flex-col gap-6 w-full mx-auto' onSubmit={handleSubmit}>
            {/* Input fields */}
            <div className='flex gap-x-6 w-full'>
              <input
                type='text'
                name='name'
                placeholder='name'
                className='input'
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type='text'
                name='email'
                placeholder='email'
                className='input'
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <input
              type='text'
              name='subject'
              placeholder='subject'
              className='input'
              value={formData.subject}
              onChange={handleChange}
            />
            <textarea
              name='message'
              placeholder='message'
              className='textarea'
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {/* Submit button */}
            <button className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
                Lets talk
              </span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
