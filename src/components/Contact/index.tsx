import { useState, FormEvent } from 'react'

import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { send } from '@emailjs/browser'

interface Form {
  name: string
  email: string
  subject: string
  message: string
}

const EMPTY_FORM: Form = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

const Contact = () => {

  const [form, setForm] = useState<Form>(EMPTY_FORM)

  const sendMessage = (e: FormEvent): void => {
    e.preventDefault()

    send('gmail_service', 'dev_port_template', {
      name: form.name,
      email: form.email,
      subject: form.subject,
      message: form.message
    }, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
      .then(res => {
        setForm(EMPTY_FORM)
        toast.success("Thank you for the feedback!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      })
      .catch(err => {
        toast.warn("Do'h. Something must happened, can you try again? pls :C", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      })
  }

  return <div className="flex flex-col items-center p-8 gap-y-8 bg-xiketic font-pixellari text-white" id="contact">
    <h1 className="text-4xl">Contact</h1>
    <div className="bg-grass flex justify-center items-center md:w-2/3 w-full h-[64px] rounded-xl">
      <img src="/img/me/curved.png" alt="My model sprite curved" />
    </div>
    <h2 className="text-3xl">You can find me at:</h2>
    <div className="flex flex-row justify-around items-center md:w-1/5 w-full ">
      <a href="https://github.com/ribamarf01/" rel="noreferrer" target="_blank">
        <img className="w-12 h-12 invert" src="/img/social/github.svg" alt="github icon link" />
      </a>
      <a href="https://www.instagram.com/ribamar.f01/" rel="noreferrer" target="_blank">
        <img className="w-12 h-12 invert" src="/img/social/instagram.svg" alt="instagram icon link" />
      </a>
      <a href="https://www.linkedin.com/in/ribamar-filho-01/" rel="noreferrer" target="_blank">
        <img className="w-12 h-12 invert" src="/img/social/linkedin.svg" alt="linkedin icon link" />
      </a>
    </div>

    <form className='flex flex-col items-center mx-4 lg:w-2/4 md:w-2/3 w-full' onSubmit={sendMessage}>

      <h2 className="text-3xl">Or send a message direct to my e-mail:</h2>

      <label className='text-xl py-2 text-alice-blue' htmlFor="name">Name:</label>
      <input className='text-alice-blue text-lg bg-transparent border-maya-blue border rounded outline-none text-center p-2 md:w-2/3 w-full' id='name' value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder='Your name' name='name' type="text" />

      <label className='text-xl py-2 text-alice-blue' htmlFor="email">E-mail:</label>
      <input className='text-alice-blue text-lg bg-transparent border-maya-blue border rounded outline-none text-center p-2 md:w-2/3 w-full' id='email' value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder='Your e-mail' name='email' type="email" />

      <label className='text-xl py-2 text-alice-blue' htmlFor="subject">Subject:</label>
      <input className='text-alice-blue text-lg bg-transparent border-maya-blue border rounded outline-none text-center p-2 md:w-2/3 w-full' id='subject' value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} placeholder='Subject' name='subject' type="text" />

      <label className='text-xl py-2 text-alice-blue' htmlFor="message">Message:</label>
      <textarea className='text-alice-blue text-lg bg-transparent border-maya-blue border rounded outline-none text-center p-2 md:w-2/3 w-full resize-none h-36' id='message' value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder='Message' name='message' />

      <div className="py-2"></div>

      <button className='text-xl p-2 w-1/4 rounded-lg bg-rhythm hover:bg-blue-jeans duration-300 transition-all text-white' type='submit'>Send</button>

    </form>

    <ToastContainer />
  </div>

}

export default Contact