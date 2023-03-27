/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  ZKTree,
  ZKTreeInterface,
} from "../../../../zk-merkle-tree/contracts/ZKTree.sol/ZKTree";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_levels",
        type: "uint32",
      },
      {
        internalType: "contract IHasher",
        name: "_hasher",
        type: "address",
      },
      {
        internalType: "contract IVerifier",
        name: "_verifier",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "commitment",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "leafIndex",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "Commit",
    type: "event",
  },
  {
    inputs: [],
    name: "FIELD_SIZE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ROOT_HISTORY_SIZE",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ZERO_VALUE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "commitments",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentRootIndex",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "filledSubtrees",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLastRoot",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_left",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_right",
        type: "uint256",
      },
    ],
    name: "hashLeftRight",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "hasher",
    outputs: [
      {
        internalType: "contract IHasher",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_root",
        type: "bytes32",
      },
    ],
    name: "isKnownRoot",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "levels",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nextIndex",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "nullifiers",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "roots",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "verifier",
    outputs: [
      {
        internalType: "contract IVerifier",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "i",
        type: "uint256",
      },
    ],
    name: "zeros",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60c0604052600380546001600160401b03191690553480156200002157600080fd5b50604051620016563803806200165683398101604081905262000044916200083c565b828260008263ffffffff1611620000ae5760405162461bcd60e51b815260206004820152602360248201527f5f6c6576656c732073686f756c642062652067726561746572207468616e207a60448201526265726f60e81b60648201526084015b60405180910390fd5b60208263ffffffff1610620001065760405162461bcd60e51b815260206004820152601e60248201527f5f6c6576656c732073686f756c64206265206c657373207468616e20333200006044820152606401620000a5565b6000805463ffffffff191663ffffffff84161781556001600160a01b0382166080525b8263ffffffff168163ffffffff1610156200017a576200014f63ffffffff8216620001da565b63ffffffff8216600090815260016020526040902055806200017181620008ae565b91505062000129565b50620001986200018c600184620008d4565b63ffffffff16620001da565b6000805260026020527fac33ff75c19e70fe83507db0d683fd3465c996598dc972688b7ace676c89077b5550506001600160a01b031660a05250620008fb9050565b6000816000036200020c57507f2fe54c60d3acabf3343a35b6eba15db4821b340f76e741e2249685ed4899af6c919050565b816001036200023c57507f256a6135777eee2fd26f54b8b7037a25439d5235caee224154186d2b8a52e31d919050565b816002036200026c57507f1151949895e82ab19924de92c40a3d6f7bcb60d92b00504b8199613683f0c200919050565b816003036200029c57507f20121ee811489ff8d61f09fb89e313f14959a0f28bb428a20dba6b0b068b3bdb919050565b81600403620002cc57507f0a89ca6ffa14cc462cfedb842c30ed221a50a3d6bf022a6a57dc82ab24c157c9919050565b81600503620002fc57507f24ca05c2b5cd42e890d6be94c68d0689f4f21c9cec9c0f13fe41d566dfb54959919050565b816006036200032c57507f1ccb97c932565a92c60156bdba2d08f3bf1377464e025cee765679e604a7315c919050565b816007036200035c57507f19156fbd7d1a8bf5cba8909367de1b624534ebab4f0f79e003bccdd1b182bdb4919050565b816008036200038c57507f261af8c1f0912e465744641409f622d466c3920ac6e5ff37e36604cb11dfff80919050565b81600903620003bb57507e58459724ff6ca5a1652fcbc3e82b93895cf08e975b19beab3f54c217d1c007919050565b81600a03620003eb57507f1f04ef20dee48d39984d8eabe768a70eafa6310ad20849d4573c3c40c2ad1e30919050565b81600b036200041b57507f1bea3dec5dab51567ce7e200a30f7ba6d4276aeaa53e2686f962a46c66d511e5919050565b81600c036200044b57507f0ee0f941e2da4b9e31c3ca97a40d8fa9ce68d97c084177071b3cb46cd3372f0f919050565b81600d036200047b57507f1ca9503e8935884501bbaf20be14eb4c46b89772c97b96e3b2ebf3a36a948bbd919050565b81600e03620004ab57507f133a80e30697cd55d8f7d4b0965b7be24057ba5dc3da898ee2187232446cb108919050565b81600f03620004db57507f13e6d8fc88839ed76e182c2a779af5b2c0da9dd18c90427a644f7e148a6253b6919050565b816010036200050b57507f1eb16b057a477f4bc8f572ea6bee39561098f78f15bfb3699dcbb7bd8db61854919050565b816011036200053b57507f0da2cb16a1ceaabf1c16b838f7a9e3f2a3a3088d9e0a6debaa748114620696ea919050565b816012036200056b57507f24a3b3d822420b14b5d8cb6c28a574f01e98ea9e940551d2ebd75cee12649f9d919050565b816013036200059b57507f198622acbd783d1b0d9064105b1fc8e4d8889de95c4c519b3f635809fe6afc05919050565b81601403620005cb57507f29d7ed391256ccc3ea596c86e933b89ff339d25ea8ddced975ae2fe30b5296d4919050565b81601503620005fb57507f19be59f2f0413ce78c0c3703a3a5451b1d7f39629fa33abd11548a76065b2967919050565b816016036200062b57507f1ff3f61797e538b70e619310d33f2a063e7eb59104e112e95738da1254dc3453919050565b816017036200065b57507f10c16ae9959cf8358980d9dd9616e48228737310a10e2b6b731c1a548f036c48919050565b816018036200068b57507f0ba433a63174a90ac20992e75e3095496812b652685b5e1a2eae0b1bf4e8fcd1919050565b81601903620006bb57507f019ddb9df2bc98d987d0dfeca9d2b643deafab8f7036562e627c3667266a044c919050565b81601a03620006eb57507f2d3c88b23175c5a5565db928414c66d1912b11acf974b2e644caaac04739ce99919050565b81601b036200071b57507f2eab55f6ae4e66e32c5189eed5c470840863445760f5ed7e7b69b2a62600f354919050565b81601c036200074a57507e2df37a2642621802383cf952bf4dd1f32e05433beeb1fd41031fb7eace979d919050565b81601d036200077a57507f104aeb41435db66c3e62feccc1d6f5d98d0a0ed75d1374db457cf462e3a1f427919050565b81601e03620007aa57507f1f3c6fd858e9a7d4b0d1f38e256a09d81d5a5e3c963987e2d4b814cfab7c6ebb919050565b81601f03620007da57507f2c7a07d20dff79d01fecedc1134284a8d08436606c93693b67e333f671bf69cc919050565b60405162461bcd60e51b815260206004820152601360248201527f496e646578206f7574206f6620626f756e6473000000000000000000000000006044820152606401620000a5565b6001600160a01b03811681146200083957600080fd5b50565b6000806000606084860312156200085257600080fd5b835163ffffffff811681146200086757600080fd5b60208501519093506200087a8162000823565b60408501519092506200088d8162000823565b809150509250925092565b634e487b7160e01b600052601160045260246000fd5b600063ffffffff808316818103620008ca57620008ca62000898565b6001019392505050565b63ffffffff828116828216039080821115620008f457620008f462000898565b5092915050565b60805160a051610d276200092f60003960006101420152600081816102c00152818161044d015261051c0152610d276000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c8063ba70f75711610097578063ec73295911610066578063ec73295914610294578063ed33639f146102bb578063f178e47c146102e2578063fc7e9c6f1461030257600080fd5b8063ba70f7571461023c578063c2b40ae414610259578063cd87a3b414610279578063e82955881461028157600080fd5b80635bb93995116100d35780635bb93995146101e35780636d9833e3146101f6578063839df9451461020957806390eeb02b1461022c57600080fd5b80632997e86b146101055780632b7ac3f31461013d578063414a37ba146101895780634ecf518b146101be575b600080fd5b610128610113366004610c4b565b60046020526000908152604090205460ff1681565b60405190151581526020015b60405180910390f35b6101647f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610134565b6101b07f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000181565b604051908152602001610134565b6000546101ce9063ffffffff1681565b60405163ffffffff9091168152602001610134565b6101b06101f1366004610c64565b61031a565b610128610204366004610c4b565b6105a5565b610128610217366004610c4b565b60056020526000908152604090205460ff1681565b6003546101ce9063ffffffff1681565b60035463ffffffff166000908152600260205260409020546101b0565b6101b0610267366004610c4b565b60026020526000908152604090205481565b6101ce601e81565b6101b061028f366004610c4b565b610623565b6101b07f2fe54c60d3acabf3343a35b6eba15db4821b340f76e741e2249685ed4899af6c81565b6101647f000000000000000000000000000000000000000000000000000000000000000081565b6101b06102f0366004610c4b565b60016020526000908152604090205481565b6003546101ce90640100000000900463ffffffff1681565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000183106103905760405162461bcd60e51b815260206004820181905260248201527f5f6c6566742073686f756c6420626520696e7369646520746865206669656c6460448201526064015b60405180910390fd5b7f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000182106104255760405162461bcd60e51b815260206004820152602160248201527f5f72696768742073686f756c6420626520696e7369646520746865206669656c60448201527f64000000000000000000000000000000000000000000000000000000000000006064820152608401610387565b604051633f1a118760e01b8152600481018490526000602482018190526044820181905284917f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690633f1a1187906064016040805180830381865afa1580156104a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104cc9190610c86565b90925090507f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001848308604051633f1a118760e01b81526004810182905260248101839052600060448201529092507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690633f1a1187906064016040805180830381865afa158015610577573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061059b9190610c86565b5095945050505050565b60008181036105b657506000919050565b60035463ffffffff16805b63ffffffff811660009081526002602052604090205484036105e7575060019392505050565b8063ffffffff166000036105f95750601e5b8061060381610caa565b9150508163ffffffff168163ffffffff16036105c1575060009392505050565b60008160000361065457507f2fe54c60d3acabf3343a35b6eba15db4821b340f76e741e2249685ed4899af6c919050565b8160010361068357507f256a6135777eee2fd26f54b8b7037a25439d5235caee224154186d2b8a52e31d919050565b816002036106b257507f1151949895e82ab19924de92c40a3d6f7bcb60d92b00504b8199613683f0c200919050565b816003036106e157507f20121ee811489ff8d61f09fb89e313f14959a0f28bb428a20dba6b0b068b3bdb919050565b8160040361071057507f0a89ca6ffa14cc462cfedb842c30ed221a50a3d6bf022a6a57dc82ab24c157c9919050565b8160050361073f57507f24ca05c2b5cd42e890d6be94c68d0689f4f21c9cec9c0f13fe41d566dfb54959919050565b8160060361076e57507f1ccb97c932565a92c60156bdba2d08f3bf1377464e025cee765679e604a7315c919050565b8160070361079d57507f19156fbd7d1a8bf5cba8909367de1b624534ebab4f0f79e003bccdd1b182bdb4919050565b816008036107cc57507f261af8c1f0912e465744641409f622d466c3920ac6e5ff37e36604cb11dfff80919050565b816009036107fa57507e58459724ff6ca5a1652fcbc3e82b93895cf08e975b19beab3f54c217d1c007919050565b81600a0361082957507f1f04ef20dee48d39984d8eabe768a70eafa6310ad20849d4573c3c40c2ad1e30919050565b81600b0361085857507f1bea3dec5dab51567ce7e200a30f7ba6d4276aeaa53e2686f962a46c66d511e5919050565b81600c0361088757507f0ee0f941e2da4b9e31c3ca97a40d8fa9ce68d97c084177071b3cb46cd3372f0f919050565b81600d036108b657507f1ca9503e8935884501bbaf20be14eb4c46b89772c97b96e3b2ebf3a36a948bbd919050565b81600e036108e557507f133a80e30697cd55d8f7d4b0965b7be24057ba5dc3da898ee2187232446cb108919050565b81600f0361091457507f13e6d8fc88839ed76e182c2a779af5b2c0da9dd18c90427a644f7e148a6253b6919050565b8160100361094357507f1eb16b057a477f4bc8f572ea6bee39561098f78f15bfb3699dcbb7bd8db61854919050565b8160110361097257507f0da2cb16a1ceaabf1c16b838f7a9e3f2a3a3088d9e0a6debaa748114620696ea919050565b816012036109a157507f24a3b3d822420b14b5d8cb6c28a574f01e98ea9e940551d2ebd75cee12649f9d919050565b816013036109d057507f198622acbd783d1b0d9064105b1fc8e4d8889de95c4c519b3f635809fe6afc05919050565b816014036109ff57507f29d7ed391256ccc3ea596c86e933b89ff339d25ea8ddced975ae2fe30b5296d4919050565b81601503610a2e57507f19be59f2f0413ce78c0c3703a3a5451b1d7f39629fa33abd11548a76065b2967919050565b81601603610a5d57507f1ff3f61797e538b70e619310d33f2a063e7eb59104e112e95738da1254dc3453919050565b81601703610a8c57507f10c16ae9959cf8358980d9dd9616e48228737310a10e2b6b731c1a548f036c48919050565b81601803610abb57507f0ba433a63174a90ac20992e75e3095496812b652685b5e1a2eae0b1bf4e8fcd1919050565b81601903610aea57507f019ddb9df2bc98d987d0dfeca9d2b643deafab8f7036562e627c3667266a044c919050565b81601a03610b1957507f2d3c88b23175c5a5565db928414c66d1912b11acf974b2e644caaac04739ce99919050565b81601b03610b4857507f2eab55f6ae4e66e32c5189eed5c470840863445760f5ed7e7b69b2a62600f354919050565b81601c03610b7657507e2df37a2642621802383cf952bf4dd1f32e05433beeb1fd41031fb7eace979d919050565b81601d03610ba557507f104aeb41435db66c3e62feccc1d6f5d98d0a0ed75d1374db457cf462e3a1f427919050565b81601e03610bd457507f1f3c6fd858e9a7d4b0d1f38e256a09d81d5a5e3c963987e2d4b814cfab7c6ebb919050565b81601f03610c0357507f2c7a07d20dff79d01fecedc1134284a8d08436606c93693b67e333f671bf69cc919050565b60405162461bcd60e51b815260206004820152601360248201527f496e646578206f7574206f6620626f756e6473000000000000000000000000006044820152606401610387565b600060208284031215610c5d57600080fd5b5035919050565b60008060408385031215610c7757600080fd5b50508035926020909101359150565b60008060408385031215610c9957600080fd5b505080516020909101519092909150565b600063ffffffff821680610ce7577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600019019291505056fea26469706673582212206ad4cae8d9149ee2558a7ed9f7a0801ea0ead5f7e3f820114a0762bd0855d36f64736f6c63430008110033";

type ZKTreeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ZKTreeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ZKTree__factory extends ContractFactory {
  constructor(...args: ZKTreeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _levels: PromiseOrValue<BigNumberish>,
    _hasher: PromiseOrValue<string>,
    _verifier: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ZKTree> {
    return super.deploy(
      _levels,
      _hasher,
      _verifier,
      overrides || {}
    ) as Promise<ZKTree>;
  }
  override getDeployTransaction(
    _levels: PromiseOrValue<BigNumberish>,
    _hasher: PromiseOrValue<string>,
    _verifier: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _levels,
      _hasher,
      _verifier,
      overrides || {}
    );
  }
  override attach(address: string): ZKTree {
    return super.attach(address) as ZKTree;
  }
  override connect(signer: Signer): ZKTree__factory {
    return super.connect(signer) as ZKTree__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ZKTreeInterface {
    return new utils.Interface(_abi) as ZKTreeInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ZKTree {
    return new Contract(address, _abi, signerOrProvider) as ZKTree;
  }
}
