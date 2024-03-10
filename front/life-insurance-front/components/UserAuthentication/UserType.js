
import '../../app/globals.css'

const UserType = () => {

    return (
        <div>
            <main>
                <div class="bg-gray-100 p-8 rounded-lg shadow-md">
                    <h2 class="text-center text-2xl font-bold text-gray-800 mb-4">Select Your Login Type</h2>
                    <div class="flex justify-center space-x-4">
                        <button class="focus:shadow-outline h-20 w-48 rounded-lg bg-indigo-700 text-xl text-white
                        transition-colors duration-150 hover:bg-indigo-800">
                            Client</button>
                        <button class="focus:shadow-outline h-20 w-48 rounded-lg bg-purple-700 text-xl text-white
                        transition-colors duration-150 hover:bg-purple-800">
                            Underwriter</button>
                    </div>
                </div>
            </main>
        </div>
    );
}
export default UserType;