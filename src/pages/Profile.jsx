const Profile = () => (
  <>
    <h1 className="text-3xl font-bold mb-6">User Profile</h1>
    
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-1">
        <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-6">
          <div className="text-center">
            <div className="h-24 w-24 rounded-full bg-gray-300 dark:bg-gray-600 mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold">JD</span>
            </div>
            <h2 className="text-xl font-semibold">John Doe</h2>
            <p className="text-gray-600 dark:text-gray-300">Administrator</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
      
      <div className="lg:col-span-2">
        <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">First Name</label>
                <input 
                  type="text" 
                  defaultValue="John" 
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Last Name</label>
                <input 
                  type="text" 
                  defaultValue="Doe" 
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input 
                type="email" 
                defaultValue="john@example.com" 
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Phone</label>
              <input 
                type="tel" 
                defaultValue="+1-555-0123" 
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Bio</label>
              <textarea 
                rows={4}
                defaultValue="E-commerce administrator with 5+ years of experience in managing online stores and customer relationships."
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  </>
);

export default Profile;