import './index.css';
import { Link } from '../../components/Link';

export const Contacts = () => {
  return (
    <section className="contacts">
      <h2 className="contacts__title">
        JOIN US <br /> WILL BE COOL
      </h2>
      <span className="contacts__mail">
        <Link href="mailto:ds0c1ety@protonmail.ch">ds0c1ety@protonmail.ch</Link>
      </span>
      <ul className="contacts__link-list">
        <li>
          <Link href="https://medium.com/@dsociety">
            <svg
              className="contacts__icon"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m7.996 21.324c0 .695-.521.982-1.098.695l-6.228-3.113c-.188-.089-.346-.238-.475-.447s-.195-.417-.195-.622v-15.227c0-.568.341-.825 1.112-.441l6.844 3.42c.099.099.026-.581.04 15.735zm.857-14.32 7.152 11.568-7.152-3.553zm15.147.241v14.079c0 .223-.062.403-.188.541-.125.138-.295.207-.509.207s-.424-.058-.629-.174l-5.906-2.939zm-.04-1.603c0 .027-1.145 1.895-3.435 5.603s-3.632 5.88-4.025 6.512l-5.223-8.469 4.339-7.039c.236-.388.72-.456 1.045-.294l7.246 3.607c.035.017.053.044.053.08z" />
            </svg>
          </Link>
        </li>
        <li>
          <Link href="https://twitter.com/dsociety3">
            <svg
              className="contacts__icon"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m21.534 7.113c.976-.693 1.797-1.558 2.466-2.554v-.001c-.893.391-1.843.651-2.835.777 1.02-.609 1.799-1.566 2.165-2.719-.951.567-2.001.967-3.12 1.191-.903-.962-2.19-1.557-3.594-1.557-2.724 0-4.917 2.211-4.917 4.921 0 .39.033.765.114 1.122-4.09-.2-7.71-2.16-10.142-5.147-.424.737-.674 1.58-.674 2.487 0 1.704.877 3.214 2.186 4.089-.791-.015-1.566-.245-2.223-.606v.054c0 2.391 1.705 4.377 3.942 4.835-.401.11-.837.162-1.29.162-.315 0-.633-.018-.931-.084.637 1.948 2.447 3.381 4.597 3.428-1.674 1.309-3.8 2.098-6.101 2.098-.403 0-.79-.018-1.177-.067 2.18 1.405 4.762 2.208 7.548 2.208 8.683 0 14.342-7.244 13.986-14.637z" />
            </svg>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/DS0CIETY">
            <svg
              className="contacts__icon"
              x="0px"
              y="0px"
              viewBox="0 0 475.084 475.084"
            >
              <path
                d="M436.244,146.752c5.14-15.422,7.713-31.409,7.713-47.967c0-22.08-4.859-42.828-14.564-62.242
   c-20.362,0-38.349,3.715-53.961,11.136c-15.604,7.423-33.4,18.938-53.379,34.545c-25.122-6.09-51.777-9.135-79.941-9.135
   c-30.837,0-60.245,3.333-88.223,9.994c-20.364-15.99-38.351-27.74-53.959-35.26c-15.608-7.52-33.689-11.279-54.247-11.279
   c-9.707,19.414-14.56,40.163-14.56,62.242c0,16.751,2.568,32.93,7.708,48.535C12.942,177.587,0,215.272,0,260.383
   c0,39.595,5.898,71.092,17.701,94.507c6.283,12.367,14.465,23.312,24.554,32.832c10.085,9.514,21.601,17.228,34.545,23.13
   c12.946,5.896,25.981,10.801,39.116,14.699c13.134,3.9,27.646,6.758,43.54,8.559c15.893,1.816,29.93,3.004,42.111,3.579
   c12.181,0.564,25.693,0.853,40.544,0.853c17.508,0,33.396-0.432,47.678-1.283c14.277-0.855,30.594-2.953,48.964-6.276
   c18.367-3.333,34.547-7.857,48.54-13.565c13.99-5.708,27.412-13.895,40.259-24.551c12.847-10.663,22.884-23.318,30.121-37.976
   c11.604-23.603,17.412-55.107,17.412-94.507C475.078,215.082,462.135,177.206,436.244,146.752z M401.995,354.455
   c-6.092,12.471-13.802,22.265-23.127,29.41c-9.329,7.139-20.938,12.847-34.831,17.135c-13.9,4.281-27.217,7.087-39.971,8.415
   c-12.758,1.334-26.933,1.998-42.545,1.998h-47.966c-15.607,0-29.79-0.664-42.541-1.998c-12.752-1.328-26.075-4.134-39.971-8.415
   c-13.891-4.288-25.5-9.996-34.829-17.135c-9.329-7.146-17.037-16.939-23.128-29.41c-6.09-12.471-9.136-27.076-9.136-43.824
   c0-22.847,6.567-42.264,19.702-58.245c13.134-15.99,30.929-23.982,53.387-23.982c8.188,0,26.746,1.997,55.677,5.995
   c13.513,2.093,28.456,3.14,44.823,3.14c16.372,0,31.313-1.044,44.824-3.14c29.317-3.999,47.869-5.995,55.678-5.995
   c22.457,0,40.252,7.996,53.386,23.982c13.135,15.988,19.698,35.398,19.698,58.245
   C411.125,327.382,408.079,341.995,401.995,354.455z"
              />
              <path
                d="M166.875,265.52c-5.806-6.475-12.703-9.712-20.699-9.712c-7.998,0-14.896,3.241-20.701,9.712
   c-5.802,6.468-9.897,13.703-12.275,21.689c-2.383,8.002-3.571,15.804-3.571,23.422c0,7.61,1.191,15.413,3.571,23.414
   c2.375,7.991,6.468,15.222,12.275,21.689c5.808,6.475,12.703,9.713,20.701,9.713c7.996,0,14.896-3.244,20.699-9.713
   c5.804-6.468,9.897-13.698,12.275-21.689c2.38-8.001,3.571-15.804,3.571-23.414c0-7.611-1.188-15.42-3.571-23.422
   C176.771,279.226,172.682,271.994,166.875,265.52z"
              />
              <path
                d="M349.601,265.52c-5.804-6.475-12.703-9.712-20.697-9.712c-7.991,0-14.894,3.241-20.701,9.712
   c-5.804,6.468-9.896,13.703-12.271,21.689c-2.385,8.002-3.576,15.804-3.576,23.422c0,7.61,1.191,15.413,3.576,23.414
   c2.375,7.991,6.468,15.222,12.271,21.689c5.808,6.475,12.71,9.713,20.701,9.713c7.994,0,14.894-3.244,20.697-9.713
   c5.801-6.468,9.896-13.698,12.278-21.689c2.379-8.001,3.569-15.804,3.569-23.414c0-7.611-1.19-15.42-3.569-23.422
   C359.498,279.226,355.402,271.994,349.601,265.52z"
              />
            </svg>
          </Link>
        </li>
      </ul>
    </section>
  );
};