# babel-problem

I have a library npm module (my-test-lib) and a create-react-app demo site (called demo-site) as a separate module to showcase the my-test-lib. The my-test-lib library makes use of Javascript's private member variables (#) syntax.

Because my-test-lib is only found locally, ```npm link``` is used to make demo-site aware of my-test-lib.

Attempting to ```npm start``` the demo site produces a syntax error within my-test-lib at the private member "#" tokens.

The linked my-test-lib app doesn't require babel to run. Private members are natively supported in node and why is demo-site's babel configuration trying to control code in linked modules anyways?
