import { useState } from 'react';

const Tabs = () => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <div className="bg-gray-100 font-Poppins flex">
      <div className="relative w-full flex flex-col h-screen overflow-y-hidden">
        <div className="w-full h-screen overflow-x-hidden border-t flex flex-col">
          <main className="w-full flex-grow p-6">
            <h1 className="text-3xl text-black pb-6">Tabbed Content</h1>

            <div className="w-full mt-6">
              <div>
                <ul className="flex border-b">
                  <li className="-mb-px mr-1" onClick={() => setOpenTab(1)}>
                    <a className={`${openTab === 1 ? 'border-l border-t border-r rounded-t text-blue-700 font-semibold' : 'text-blue-500 hover:text-blue-800'} bg-white inline-block py-2 px-4 font-semibold`} href="#">
                      Tab 1
                    </a>
                  </li>
                  <li className="mr-1" onClick={() => setOpenTab(2)}>
                    <a className={`${openTab === 2 ? 'border-l border-t border-r rounded-t text-blue-700 font-semibold' : 'text-blue-500 hover:text-blue-800'} bg-white inline-block py-2 px-4 font-semibold`} href="#">
                      Tab 2
                    </a>
                  </li>
                  <li className="mr-1" onClick={() => setOpenTab(3)}>
                    <a className={`${openTab === 3 ? 'border-l border-t border-r rounded-t text-blue-700 font-semibold' : 'text-blue-500 hover:text-blue-800'} bg-white inline-block py-2 px-4 font-semibold`} href="#">
                      Tab 3
                    </a>
                  </li>
                  <li className="mr-1" onClick={() => setOpenTab(4)}>
                    <a className={`${openTab === 4 ? 'border-l border-t border-r rounded-t text-blue-700 font-semibold' : 'text-blue-500 hover:text-blue-800'} bg-white inline-block py-2 px-4 font-semibold`} href="#">
                      Tab 4
                    </a>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6">
                <div className={openTab === 1 ? '' : 'hidden'}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus ligula at condimentum sagittis. Maecenas velit libero, fermentum a leo quis, pretium egestas risus. Proin tempus sem magna, vitae convallis purus rhoncus non. Aenean tristique congue metus in lobortis. Nullam nisi leo, luctus in sapien eget, accumsan mattis leo. Morbi magna dolor, dapibus ut ligula eget, commodo venenatis risus. Nunc quis dignissim velit. Donec nec dapibus ligula. Etiam quis libero ultrices, semper arcu id, suscipit purus. Phasellus eu arcu tincidunt dui pellentesque feugiat et at risus. In hendrerit laoreet ante ac imperdiet. Nam tortor urna, laoreet in malesuada quis, pretium cursus dolor.
                </div>
                <div className={openTab === 2 ? '' : 'hidden'}>
                  Curabitur at lacinia felis. Curabitur elit ante, efficitur molestie iaculis non, blandit dictum dui. Fusce ac faucibus lorem, in aliquet metus. Praesent bibendum justo vitae ante imperdiet, sit amet posuere tortor tincidunt. Nam a arcu eros. In vitae augue tempus, ullamcorper lectus ut, egestas erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean imperdiet eget sapien nec consequat. Etiam imperdiet diam ac mattis gravida.
                </div>
                <div className={openTab === 3 ? '' : 'hidden'}>
                  Duis imperdiet ullamcorper nibh, sed euismod dolor facilisis sit amet. Etiam quis cursus lorem. Vivamus euismod accumsan neque lobortis tempus. Praesent nec lacinia odio, a dictum risus. Sed eget dictum turpis, vitae iaculis orci. Vivamus laoreet consequat velit, non viverra diam pulvinar a. Aliquam bibendum ligula lacus, ac convallis ipsum hendrerit ut. Suspendisse rutrum dui libero, non aliquam lectus lobortis at. Donec gravida finibus sollicitudin. Nulla ut metus finibus purus vehicula porttitor. Fusce id sem non nisl pulvinar scelerisque.
                </div>
                <div className={openTab === 4 ? '' : 'hidden'}>
                  Mauris viverra viverra dolor quis gravida. Duis pharetra felis id tellus faucibus pulvinar. Integer non ligula lobortis, hendrerit est eget, maximus sapien. Suspendisse vel nibh feugiat, porta ex et, dignissim diam. Maecenas finibus consectetur efficitur. Sed tempus vehicula interdum. Nam porttitor id risus a ultrices. Proin mi nulla, ultricies eu ipsum vitae, fermentum congue nunc. Phasellus a dictum massa. Nunc quis lacus et ex vulputate molestie ac eget est. Integer porttitor placerat quam, eu convallis sem tristique sit amet. Nam at risus fringilla, pharetra mauris tincidunt, imperdiet nisi.
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
