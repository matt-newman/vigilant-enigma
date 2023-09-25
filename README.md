# Frontend Engineer Challenge

To facilitate our discussion during technical interview, we ask our candidates to build the following small part of our Live Market list using static data provided. 

Reference design is hosted in <a href="https://www.figma.com">Figma</a> (account is needed for Inspect mode) 

<img src="https://github.com/rooser-eu/frontend-engineer-challenge/blob/8633176dec6a97975b3f8c9a5f04e56967bc88f7/Design_Reference.png" alt="Reference design" title="Reference design">

<ul>
  <li><a href="https://www.figma.com/file/HrRWXoG70Gy8W4c9moXuq2/Front-end-Challenge?type=design&node-id=0-1&mode=design&t=sECLSwzwlb09l54c-0" target="_blank">Figma design</a></li>
  <li>
      Static JSON files representing different sections of the Live Market activity are in this directory (<a href="https://github.com/rooser-eu/frontend-engineer-challenge/tree/main/data">data</a>).
      <ul>
        <li><strong>Accepted Orders</strong> - data/accepted_orders.json</li>
        <li><strong>Live Demand</strong> - data/live_demand.json</li>
        <li><strong>Recent Activity</strong> - data/recent_activity.json</li>
      </ul>
  </li>
  <li>Buttons behaviour:
      <ul>
        <li><strong>Accept</strong> - removes the item from the live demand and moves it to the list of accepted orders</li>
        <li><strong>Ignore</strong> - removes the item from the live demand.</li>
      </ul>
  </li>
  <li>Please share your solution with us in the form of a public Git repository.</li>
</ul>

<strong>Task</strong>
<ul>
  <li>Fully implement the given UI on a level of functional detail you deem necessary. For your implementation setup a monorepo (preferably using nx) and use NextJS, Tailwind CSS, React Testing Library and any other frameworks or tools you see necessary.</li>
  <li>UI has to be performant - feel free to pick your approach on loading all the data like creating a light dummy API interface around it or something completely different.</li>
  <li>Make sure you have picked an appropriate testing strategy and your code is well tested.</li>
  <li>You can use any design system of your choice for this exercise. Attention to detail would be great to have, but a pixel perfect match of the UI with the designs is not expected.</li>
</ul>
  
<strong>Bonus</strong>
<ul>
  <li>If you spot any UX issues on this page feel free to address them in your implementation and share your thoughts with us during our chat.</li>
  <li>Dockerise your application and get it ready for deployment. </li>
</ul>
