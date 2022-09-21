const getAllCatalogue = `{
  getAllCatalogue {
    _id
    nom
    description
    location {
			description
			type
			coordinates
			address
		}
    motif
    surface
    prix
    monthly
    createdAt
    updatedAt
    client {
      _id
      nom
    }
    star 
    adore
    contact
    image {
      _id
      nom
      isPrincipal
    }
  }
}
`;

const getAllCatalogueAdore = _id => `
  {
    findAdoreClient(_id: "${_id}") {
      _id
      catalogue {
        _id
        nom
        description
        location {
          description
          type
          coordinates
          address
        }
        motif
        surface
        prix
        monthly
        createdAt
        updatedAt
        star 
        adore
        contact
        client{
          _id
        }
        image {
          _id
          nom
          isPrincipal
        }
      }
    }
  }
`;

const findOneCatalogue = _id => `
  query {
    findOneCatalogue(_id: "${_id}") {
      _id
      nom
      description
      location {
        description
        type
        coordinates
        address
      }
      motif
      surface
      prix
      monthly
      client {
        _id
      }
      star
      adore
      contact
      createdAt
      updatedAt
      image {
        _id
        nom
        isPrincipal
      }
    }
  }
`;

const addCatalogue = data => {
  return `
  mutation { 
    addCatalogue(
      nom: "${data?.nom || ''}",
      description: "${data?.description || ''}",
      motif: "${data?.motif || ''}",
      surface: ${data?.surface || 0},
      prix: ${data?.prix},
      monthly: "${data?.monthly || ''}",
      client: "${data?.client}", 
      categorieCatalogue: "${data?.categorieCatalogue}",
      descriptionL: "${data?.descriptionL || ''}"
      typeL: "${data?.typeL || ''}"
      coordinatesL: [${data?.latitudeL || 0}, ${data?.longitudeL || 0}]
      addressL: "${data?.addressL || ''}"
    ) {    
      _id
      nom
      description
      location {
        description
        type
        coordinates
        address
      }
      motif
      surface
      prix
      monthly
      client {
        _id
        nom
      }
      image {
        _id
        nom
        isPrincipal
      }
      star
      adore
      contact
      createdAt
      updatedAt
    }
  }
`;
};

const getAllCategorieCatalogue = () => `
  query {
    getAllCategorieCatalogue {
      _id
      nom
      description
    }
  }
`;

const addImage = data => `
  mutation {
    addImage(
      nom: "",
      isPrincipal: 0,
      catalogue: "${data.catalogue}",
      client: "${data.client}",
    ){
      _id
      nom
      isPrincipal
    }
  }
`;

const deleteCatalogue = id => `
  mutation {
    deleteCatalogue(_id: "${id}") {
      _id
      nom
    }
  }
`;

export default {
  getAllCatalogue,
  getAllCatalogueAdore,
  findOneCatalogue,
  addCatalogue,
  getAllCategorieCatalogue,
  addImage,
  deleteCatalogue,
};
