provision:
	ansible-playbook cm/vagrant.yml -i 'localhost, ' -c local -vv

run:
	npm run babel-node -- ./bin/$(G)

install:
	node

publish:
	node
