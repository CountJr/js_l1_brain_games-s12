provision:
	ansible-playbook cm/vagrant.yml -i 'localhost, ' -c local -vv

run:
	npm run babel-node -- ./src/bin/$(G)

lint:
	npm run eslint -- bin src

install:
	node

publish:
	node
