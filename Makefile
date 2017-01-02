provision:
	ansible-playbook cm/vagrant.yml -i 'localhost, ' -c local -vv

run:
	npm run babel-node -- ./bin/$(G)

lint:
	npm run eslint -- bin

install:
	node

publish:
	node
