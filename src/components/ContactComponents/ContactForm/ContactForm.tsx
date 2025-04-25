

const ContactForm = () => {
    return (
        <div>
            <form className="flex flex-col gap-4">
                <div className="flex flex-col md:flex-row gap-4">
                    <input className="w-full md:w-1/2 px-5 py-3.5 rounded-xl bg-[#141d1f] font-robotoMono tracking-tighter placeholder:text-gray-400 font-medium text-[#adff85] outline-0" type="text" placeholder="Full Name" />
                    <input className="w-full md:w-1/2 px-5 py-3.5 rounded-xl bg-[#141d1f] font-robotoMono tracking-tighter placeholder:text-gray-400 font-medium text-[#adff85] outline-0" type="email" placeholder="Email" />
                </div>
                <textarea rows={20} className="w-full px-5 py-3.5 rounded-xl bg-[#141d1f] font-robotoMono tracking-tighter placeholder:text-gray-400 text-[#adff85] font-medium outline-0" placeholder="Message"></textarea>
                <input className="w-full px-5 py-3.5 rounded-xl bg-[#adff85] font-robotoMono tracking-tighter placeholder:text-gray-400 text-black uppercase text-sm transition-colors duration-300 cursor-pointer hover:bg-[#8dcc6e] font-medium outline-0" type="submit" value="Send Message" />
            </form>
        </div>
    );
};

export default ContactForm;